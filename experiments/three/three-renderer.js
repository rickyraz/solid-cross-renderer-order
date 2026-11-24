import { createRenderer } from "@solidjs/universal";
import { BoxGeometry, DataTexture, Group, Mesh, MeshBasicMaterial, Object3D, Scene } from "three";

// A universal renderer for real three.js objects, kept small on purpose.
// It tests what @solidjs/universal leaves to the renderer: a catalogue,
// constructor args, attach, disposal, and moves inside Object3D.children.

const catalogue = {
  scene: Scene,
  group: Group,
  mesh: Mesh,
  boxGeometry: BoxGeometry,
  meshBasicMaterial: MeshBasicMaterial,
  dataTexture: DataTexture
};

// Counters that the page and the test read.
export const stats = { created: 0, recreated: 0, disposed: 0, cancelledDisposals: 0, textNodes: 0 };

// Solid holds this wrapper, not the three object. The wrapper is the shadow
// tree: material, geometry and texture never appear in Object3D.children,
// but Solid still needs a parent and a next sibling for every node.
export class Instance {
  constructor(tag, object) {
    this.tag = tag;
    this.object = object;
    this.parent = undefined;
    this.children = [];
    this.props = {};
    this.attachment = undefined; // { target, key, previous } while attached by property
    this.pendingDispose = false;
  }
}

function construct(tag, args) {
  const Constructor = catalogue[tag];
  if (!Constructor) throw new Error(`Unknown three element <${tag}>.`);
  stats.created++;
  return new Constructor(...(args ?? []));
}

// Which property a non-Object3D child attaches to when no `attach` prop is set.
function defaultAttach(instance) {
  const object = instance.object;
  if (object.isMaterial) return "material";
  if (object.isBufferGeometry) return "geometry";
  if (object.isTexture) return "map";
  return undefined;
}

function attachKey(instance) {
  return instance.props.attach ?? defaultAttach(instance);
}

// Place `child.object` into `parent.object`, at the position the shadow tree says.
function link(parent, child) {
  const key = !child.object.isObject3D ? attachKey(child) : undefined;
  if (key) {
    child.attachment = { target: parent.object, key, previous: parent.object[key] };
    parent.object[key] = child.object;
    if (parent.object.isMaterial) parent.object.needsUpdate = true;
    return;
  }
  if (!(child.object.isObject3D && parent.object.isObject3D)) {
    throw new Error(`<${child.tag}> cannot go inside <${parent.tag}> without an attach prop.`);
  }
  // Object3D.add() always appends, so find the next Object3D sibling in the
  // shadow tree and splice before it. Then fire the events add() would fire.
  child.object.removeFromParent();
  const siblings = parent.children;
  let before;
  for (let i = siblings.indexOf(child) + 1; i < siblings.length; i++) {
    const candidate = siblings[i].object;
    if (candidate?.isObject3D && candidate.parent === parent.object) { before = candidate; break; }
  }
  const list = parent.object.children;
  const index = before ? list.indexOf(before) : list.length;
  list.splice(index, 0, child.object);
  child.object.parent = parent.object;
  child.object.dispatchEvent({ type: "added" });
  parent.object.dispatchEvent({ type: "childadded", child: child.object });
}

function unlink(child) {
  if (child.attachment) {
    const { target, key, previous } = child.attachment;
    if (target[key] === child.object) target[key] = previous;
    if (target.isMaterial) target.needsUpdate = true;
    child.attachment = undefined;
  } else if (child.object?.isObject3D) {
    child.object.removeFromParent();
  }
}

// Release GPU resources owned by this subtree. Only objects this renderer
// constructed are disposed; Solid never told us about anything else.
function disposeTree(instance) {
  for (const child of instance.children) disposeTree(child);
  unlink(instance);
  if (typeof instance.object?.dispose === "function" && !instance.object.isScene) {
    instance.object.dispose();
    stats.disposed++;
  }
  instance.children = [];
  instance.parent = undefined;
}

// removeNode() does not mean "gone forever": a held JSX node could come back.
// Wait one microtask; if nothing re-inserted the node, dispose it.
function scheduleDispose(instance) {
  instance.pendingDispose = true;
  queueMicrotask(() => {
    if (!instance.pendingDispose) return;
    instance.pendingDispose = false;
    disposeTree(instance);
  });
}

// Apply one prop to a three object.
function applyProp(instance, name, value) {
  instance.props[name] = value;
  if (name === "attach") return;
  const target = instance.object;
  const current = target[name];
  if (current && typeof current.set === "function" && !current.isTexture) {
    // Vector3, Euler, Color and friends: mutate, never replace.
    Array.isArray(value) ? current.set(...value) : current.set(value);
  } else {
    target[name] = value;
  }
}

// `args` changed after construction. The renderer has no "replace node"
// primitive, but because Solid holds the wrapper, the wrapper can swap its
// object in place: build a new one, move props and children, dispose the old.
function recreate(instance, args) {
  const old = instance.object;
  const parent = instance.parent;
  const wasLinked = parent && (instance.attachment || old.parent === parent.object);
  if (wasLinked) unlink(instance);
  instance.object = construct(instance.tag, args);
  stats.recreated++;
  for (const [name, value] of Object.entries(instance.props)) {
    if (name !== "args") applyProp(instance, name, value);
  }
  for (const child of instance.children) {
    unlink(child);
    link(instance, child);
  }
  if (old.isObject3D) {
    instance.object.position.copy(old.position);
    instance.object.quaternion.copy(old.quaternion);
    instance.object.scale.copy(old.scale);
  }
  if (wasLinked) link(parent, instance);
  if (typeof old.dispose === "function") { old.dispose(); stats.disposed++; }
}

export const {
  render, createElement, createComponent, insertNode, insert, effect, memo, setProp, spread, mergeProps
} = createRenderer({
  createElement(tag, staticProps) {
    // Only literal props arrive here. `args={[size(), 1, 1]}` arrives later
    // through setProperty, after the object was built with no args.
    const instance = new Instance(tag, construct(tag, staticProps?.args));
    for (const [name, value] of Object.entries(staticProps ?? {})) {
      if (name === "args") instance.props.args = value;
      else applyProp(instance, name, value);
    }
    return instance;
  },
  createTextNode(text) {
    // three has no text nodes, but Solid needs them for whitespace and sentinels.
    stats.textNodes++;
    const instance = new Instance("#text", undefined);
    instance.props.text = text;
    return instance;
  },
  isTextNode: node => node.tag === "#text",
  replaceText(node, text) { node.props.text = text; },
  setProperty(node, name, value, prev) {
    if (name === "args") {
      const before = node.props.args;
      node.props.args = value;
      // An args prop that equals what the object was built with needs no work.
      if (before !== undefined && JSON.stringify(before) === JSON.stringify(value)) return;
      if (prev === undefined && before === undefined && (value?.length ?? 0) === 0) return;
      recreate(node, value);
      return;
    }
    if (name === "attach" && node.attachment && value !== node.props.attach) {
      const parent = node.parent;
      unlink(node);
      node.props.attach = value;
      link(parent, node);
      return;
    }
    applyProp(node, name, value);
  },
  getParentNode: node => node.parent,
  getFirstChild: node => node.children[0],
  getNextSibling(node) {
    const siblings = node.parent?.children;
    return siblings?.[siblings.indexOf(node) + 1];
  },
  insertNode(parent, node, anchor) {
    if (!(node instanceof Instance)) throw new TypeError("The three renderer only accepts its own nodes.");
    if (node === anchor) return;
    if (node.pendingDispose) { node.pendingDispose = false; stats.cancelledDisposals++; }
    if (node.parent) {
      const old = node.parent.children;
      old.splice(old.indexOf(node), 1);
      unlink(node);
    }
    const index = anchor == null ? parent.children.length : parent.children.indexOf(anchor);
    parent.children.splice(index, 0, node);
    node.parent = parent;
    if (node.tag !== "#text" && parent.tag !== "#text") link(parent, node);
  },
  removeNode(parent, node) {
    const index = parent.children.indexOf(node);
    if (index >= 0) parent.children.splice(index, 1);
    node.parent = undefined;
    if (node.tag === "#text") return;
    unlink(node);
    scheduleDispose(node);
  }
});

// Wrap an existing three object (for example the Scene a page already owns)
// so it can be a render() root.
export function rootOf(object, tag = "root") {
  if (!(object instanceof Object3D)) throw new TypeError("The root must be an Object3D.");
  return new Instance(tag, object);
}
