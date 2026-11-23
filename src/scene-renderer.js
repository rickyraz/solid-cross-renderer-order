import { createRenderer } from "@solidjs/universal";

class SceneNode {
  constructor(tag, props = {}) {
    this.tag = tag;
    this.props = { ...props };
    this.children = [];
    this.parent = undefined;
  }
}

function removeNode(parent, node) {
  const index = parent.children.indexOf(node);
  if (index < 0) throw new Error("This node does not belong to this parent.");
  parent.children.splice(index, 1);
  node.parent = undefined;
}

export const {
  render, createElement, createComponent, insertNode, insert, effect, memo, setProp
} = createRenderer({
  createElement: (tag, props) => new SceneNode(tag, props),
  createTextNode: text => new SceneNode("#text", { text }),
  isTextNode: node => node.tag === "#text",
  replaceText(node, text) { node.props.text = text; },
  setProperty(node, key, value) { node.props[key] = value; },
  getFirstChild: node => node.children[0],
  getParentNode: node => node.parent,
  getNextSibling(node) {
    const siblings = node.parent?.children;
    return siblings?.[siblings.indexOf(node) + 1];
  },
  removeNode,
  insertNode(parent, node, anchor) {
    if (!(node instanceof SceneNode)) throw new TypeError("The scene renderer requires a SceneNode.");
    if (anchor != null && anchor.parent !== parent) throw new Error("The anchor belongs to a different parent.");
    if (node === anchor) return;
    if (node.parent) removeNode(node.parent, node);
    const index = anchor == null ? parent.children.length : parent.children.indexOf(anchor);
    parent.children.splice(index, 0, node);
    node.parent = parent;

    // Both bridges see the new scene order before this optional callback runs.
    node.afterInsert?.(parent.children.slice(index + 1));
  }
});
