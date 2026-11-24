import { createSignal, flush, onCleanup, Show } from "solid-js";
import { PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { createEvents } from "./three-events.js";
import { render, rootOf } from "./three-renderer.js";

// Pointer events on their own canvas: hover, click with bubbling and
// stopPropagation, drag with pointer capture, and unmount during either.

const colors = { A: "#e4572e", B: "#2973b2" };
const HOVER = "#ffd166";

export function mountEvents() {
  const [mounted, setMounted] = createSignal(true);
  // `hovered` is a signal because it drives a prop (the color). The counters
  // are plain data for the status line.
  const [hovered, setHovered] = createSignal(null);
  const log = { clicks: { A: 0, B: 0 }, groupClicks: 0, over: { A: 0, B: 0 }, out: { A: 0, B: 0 }, dragMoves: { A: 0, B: 0 } };

  function Box(props) {
    let dragX;
    // Disposed nodes get no pointerout, so the component clears its own hover state.
    onCleanup(() => { if (hovered() === props.id) setHovered(null); });
    return <mesh name={props.id} position={[props.x, 0.2, 0]} rotation={[0.5, 0.6, 0]}
      onPointerOver={() => { log.over[props.id]++; setHovered(props.id); }}
      onPointerOut={() => { log.out[props.id]++; if (hovered() === props.id) setHovered(null); }}
      onClick={event => {
        log.clicks[props.id]++;
        // B keeps its clicks to itself; A's clicks bubble up to the group.
        if (props.id === "B") event.stopPropagation();
      }}
      onPointerDown={event => { dragX = event.nativeEvent.clientX; event.setPointerCapture(); }}
      onPointerMove={event => {
        if (dragX === undefined) return;
        // Imperative per-event mutation: no signal, no Solid update.
        event.eventObject.rotation.y += (event.nativeEvent.clientX - dragX) * 0.02;
        dragX = event.nativeEvent.clientX;
        log.dragMoves[props.id]++;
      }}
      onPointerUp={() => { dragX = undefined; }}>
      <boxGeometry />
      <meshBasicMaterial color={hovered() === props.id ? HOVER : colors[props.id]} />
    </mesh>;
  }

  const canvas = document.querySelector("#events-canvas");
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
      <group name="slots" onClick={() => { log.groupClicks++; }}>
        <Box id="A" x={-1.1} />
        <Box id="B" x={1.1} />
      </group>
    </Show>
  </group>, rootOf(scene));

  const events = createEvents({ canvas, camera, scene, afterEvent: () => commit() });

  function snapshot() {
    const meshes = scene.getObjectByName("slots")?.children ?? [];
    return {
      order: meshes.map(mesh => mesh.name),
      rotationsY: meshes.map(mesh => mesh.rotation.y),
      colors: meshes.map(mesh => mesh.material.color.getHexString()),
      memory: { ...renderer.info.memory },
      events: { hovered: hovered(), log: structuredClone(log), ...events.debug(), stats: { ...events.stats } }
    };
  }

  // Where an object's center lands on the page, for the test to point at.
  function screenOf(name) {
    const object = scene.getObjectByName(name);
    if (!object) return null;
    const v = object.getWorldPosition(new Vector3()).project(camera);
    const rect = canvas.getBoundingClientRect();
    return { x: rect.left + (v.x + 1) / 2 * rect.width, y: rect.top + (1 - v.y) / 2 * rect.height };
  }

  const status = document.querySelector("#event-status");
  async function commit() {
    flush();
    await Promise.resolve();
    await Promise.resolve();
    renderer.render(scene, camera);
    const s = snapshot();
    const e = s.events;
    status.textContent = `hovered ${e.hovered ?? "-"} · captured ${e.captured.join(", ") || "-"} · ` +
      `clicks A ${e.log.clicks.A}, B ${e.log.clicks.B}, group ${e.log.groupClicks} · ` +
      `drag moves A ${e.log.dragMoves.A}, B ${e.log.dragMoves.B} · raycasts ${e.stats.raycasts}`;
    return s;
  }

  const actions = {
    toggle: () => { setMounted(m => !m); return commit(); },
    snapshot,
    commit,
    screenOf
  };
  window.__events = actions;

  for (const button of document.querySelectorAll("button[data-events]")) {
    button.addEventListener("click", () => actions[button.dataset.events]());
    button.disabled = false;
  }
  commit();
}
