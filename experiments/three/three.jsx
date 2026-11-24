import { createSignal, flush, For, Show } from "solid-js";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { render, rootOf, stats } from "./three-renderer.js";

// The same keyed swap as the main demo, but every node is a real three.js
// object rendered with WebGL. Each slot is a mesh with an attached geometry,
// material, and texture, so attach, args, and disposal all get exercised.

const [order, setOrder] = createSignal(["A", "B"]);
const [width, setWidth] = createSignal(1);
const [color, setColor] = createSignal("#ffffff");
const [mounted, setMounted] = createSignal(true);

const tints = { A: [228, 87, 46], B: [41, 115, 178] };
// A new array on every call, so `args` is dynamic and arrives through setProp.
const pixels = id => new Uint8Array(Array.from({ length: 4 }, (_, i) =>
  i % 3 === 0 ? [...tints[id], 255] : [255, 255, 255, 255]).flat());

function Slot(props) {
  const x = () => (order().indexOf(props.id) - 0.5) * 2.2;
  return <mesh name={props.id} position={[x(), 0.2, 0]} rotation={[0.5, 0.6, 0]}>
    <boxGeometry args={[width(), 1, 1]} />
    <meshBasicMaterial color={color()}>
      <dataTexture args={[pixels(props.id), 2, 2]} needsUpdate={true} />
    </meshBasicMaterial>
  </mesh>;
}

const canvas = document.querySelector("canvas");
const scene = new Scene();
const camera = new PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 100);
camera.position.set(0, 0, 6);
const renderer = new WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setClearColor(0xf4f4f4);

render(() => <group name="world">
  <mesh name="fixed" position={[0, -1.4, 0]} scale={[5, 0.1, 1]}>
    <boxGeometry />
    <meshBasicMaterial color="#888888" />
  </mesh>
  <Show when={mounted()}>
    <group name="slots">
      <For each={order()}>{id => <Slot id={id} />}</For>
    </group>
  </Show>
</group>, rootOf(scene));

const slots = () => scene.getObjectByName("slots");

function snapshot() {
  const meshes = slots()?.children ?? [];
  return {
    order: meshes.map(mesh => mesh.name),
    meshUuids: meshes.map(mesh => mesh.uuid),
    geometryUuids: meshes.map(mesh => mesh.geometry.uuid),
    widths: meshes.map(mesh => mesh.geometry.parameters.width),
    mapsAttached: meshes.map(mesh => Boolean(mesh.material.map?.isDataTexture)),
    sceneChildren: scene.children.map(child => child.name),
    memory: { ...renderer.info.memory },
    stats: { ...stats }
  };
}

const status = document.querySelector("output");
// Let deferred disposals run, then draw and report.
async function commit() {
  flush();
  await Promise.resolve();
  await Promise.resolve();
  renderer.render(scene, camera);
  const s = snapshot();
  status.textContent = `slots ${s.order.join(", ") || "(none)"} · width ${s.widths[0] ?? "-"} · ` +
    `geometries ${s.memory.geometries} · textures ${s.memory.textures} · ` +
    `created ${s.stats.created} · recreated ${s.stats.recreated} · disposed ${s.stats.disposed}`;
  return s;
}

const actions = {
  swap: () => { setOrder(previous => [...previous].reverse()); return commit(); },
  widen: () => { setWidth(w => (w === 1 ? 2 : 1)); return commit(); },
  recolor: () => { setColor(c => (c === "#ffffff" ? "#ffe08a" : "#ffffff")); return commit(); },
  toggle: () => { setMounted(m => !m); return commit(); },
  // Unmount, remount, swap and resize, each step drawn, `count` times.
  async cycle(count = 100) {
    for (let i = 0; i < count; i++) {
      await actions.toggle();
      await actions.toggle();
      await actions.swap();
      await actions.widen();
    }
    return commit();
  },
  snapshot,
  commit
};
window.__three = actions;

for (const button of document.querySelectorAll("button[data-action]")) {
  button.addEventListener("click", () => actions[button.dataset.action]());
  button.disabled = false;
}
commit();
