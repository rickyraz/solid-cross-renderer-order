import { createSignal, flush, For, Show } from "solid-js";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { onSceneChange, render, rootNodeOf, rootOf } from "./three-renderer.js";
import { createSolidFrameLoop, useFrame } from "./use-frame.js";

// A per-frame loop on its own canvas. 100 boxes spin, either by mutating
// rotation in a frame callback (imperative) or through a signal written each
// frame and read by a rotation prop (signal). A hidden probe measures how
// many frames late a signal written in a frame callback reaches three.

const COUNT = 100;
const SPEED = 1.5; // radians per second

export function mountFrame() {
  const manual = new URLSearchParams(location.search).has("manual");
  const [strategy, setStrategy] = createSignal("imperative");
  const [spinning, setSpinning] = createSignal(true);
  const [probing, setProbing] = createSignal(false);
  const [color, setColor] = createSignal("#2973b2");
  const [time, setTime] = createSignal(0);
  const [probe, setProbe] = createSignal(0);

  const canvas = document.querySelector("#frame-canvas");
  const scene = new Scene();
  const camera = new PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 100);
  camera.position.set(0, 0, 9);
  const renderer = new WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  renderer.setClearColor(0xf4f4f4);

  let lastLag = null;
  const lags = [];
  const loop = createSolidFrameLoop({
    mode: manual ? "never" : "always",
    render(state) {
      // How far behind the frame number is the one the probe's prop shows?
      const probeMesh = scene.getObjectByName("probe");
      if (probeMesh) {
        lastLag = state.frame - Number(probeMesh.userData.frame ?? 0);
        lags.push(lastLag);
        if (lags.length > 120) lags.shift();
      }
      renderer.render(scene, camera);
    }
  });

  const position = i => [((i % 10) - 4.5) * 0.9, (Math.floor(i / 10) - 4.5) * 0.55, 0];

  // Imperative: the frame callback mutates the three object. No signal, no
  // Solid update. The ref receives the renderer's node; .object is the mesh.
  function ImperativeBox(props) {
    let node;
    useFrame(loop, state => { node.object.rotation.y = state.time * SPEED + props.i * 0.1; });
    return <mesh ref={n => { node = n; }} position={position(props.i)} rotation={[0.5, 0, 0]} scale={[0.35, 0.35, 0.35]}>
      <boxGeometry />
      <meshBasicMaterial color={color()} />
    </mesh>;
  }

  // Signal: one callback writes `time`, and each box reads it through a prop.
  function SignalBox(props) {
    return <mesh position={position(props.i)} scale={[0.35, 0.35, 0.35]}
      rotation={[0.5, time() * SPEED + props.i * 0.1, 0]}>
      <boxGeometry />
      <meshBasicMaterial color={color()} />
    </mesh>;
  }
  function TimeWriter() {
    useFrame(loop, state => setTime(state.time));
    return null;
  }

  // Writes the frame number to a signal; the prop carries it into three.
  function Probe() {
    useFrame(loop, state => setProbe(state.frame), { animates: false });
    return <mesh name="probe" visible={false} userData={{ frame: probe() }} />;
  }

  const ids = Array.from({ length: COUNT }, (_, i) => i);
  const root = rootOf(scene);
  render(() => <group name="frame-world">
    <mesh name="floor" position={[0, -3.15, 0]} scale={[9, 0.1, 1]}>
      <boxGeometry />
      <meshBasicMaterial color={color()} />
    </mesh>
    <Show when={spinning()}>
      <For each={[strategy()]}>{s => <group name={"spin-" + s}>
        {s === "signal" ? <TimeWriter /> : null}
        <For each={ids}>{i => (s === "signal" ? <SignalBox i={i} /> : <ImperativeBox i={i} />)}</For>
      </group>}</For>
    </Show>
    <Show when={probing()}><Probe /></Show>
  </group>, root);

  // Demand mode: any change Solid makes to this scene asks for a frame.
  onSceneChange(node => { if (rootNodeOf(node) === root) loop.invalidate(); });

  function snapshot() {
    const boxes = scene.getObjectByName("spin-" + strategy())?.children ?? [];
    const s = loop.stats;
    return {
      mode: loop.mode,
      flushBeforeRender: loop.flushBeforeRender,
      strategy: strategy(),
      spinning: spinning(),
      probing: probing(),
      boxes: boxes.length,
      rotationsY: boxes.slice(0, 3).map(b => b.rotation.y),
      subscribers: loop.subscriberCount,
      lastLag,
      lags: [...lags],
      stats: { ...s },
      avgUpdateMs: s.frames ? s.updateMs / s.frames : 0,
      avgRenderMs: s.frames ? s.renderMs / s.frames : 0,
      memory: { ...renderer.info.memory }
    };
  }

  const status = document.querySelector("#frame-status");
  function report() {
    const s = snapshot();
    status.textContent = `${s.mode}${s.mode === "never" ? "" : " loop"} · ${s.strategy} · flush ${s.flushBeforeRender ? "on" : "off"} · ` +
      `frames ${s.stats.frames} · subscribers ${s.subscribers} · ` +
      `update ${s.avgUpdateMs.toFixed(2)} ms · render ${s.avgRenderMs.toFixed(2)} ms` +
      (s.probing ? ` · probe lag ${s.lastLag ?? "-"} frame(s)` : "");
    return s;
  }
  setInterval(report, 250);

  // Let Solid's batched updates and deferred disposals run.
  async function settle() {
    flush();
    for (let i = 0; i < 3; i++) await Promise.resolve();
  }

  let clock = 0;
  const actions = {
    // Step `count` frames of `dt` seconds, letting microtasks run between
    // frames as they do between real animation frames.
    async advance(count = 1, dt = 1 / 60) {
      for (let i = 0; i < count; i++) {
        clock += dt * 1000;
        loop.advance(clock);
        await settle();
      }
      return report();
    },
    async set(name, value) {
      if (name === "mode") loop.setMode(value);
      if (name === "flush") loop.flushBeforeRender = value;
      if (name === "strategy") setStrategy(value);
      if (name === "spinning") setSpinning(value);
      if (name === "probing") setProbing(value);
      if (name === "color") setColor(value);
      await settle();
      return report();
    },
    resetStats() {
      for (const key of Object.keys(loop.stats)) loop.stats[key] = 0;
      lags.length = 0;
      return report();
    },
    // Wait for real animation frames (for the "always" and "demand" modes).
    async wait(ms) {
      await new Promise(r => setTimeout(r, ms));
      return report();
    },
    snapshot: report
  };
  window.__frame = actions;

  const toggles = {
    mode: () => actions.set("mode", loop.mode === "always" ? "demand" : "always"),
    strategy: () => actions.set("strategy", strategy() === "imperative" ? "signal" : "imperative"),
    spinning: () => actions.set("spinning", !spinning()),
    probing: () => actions.set("probing", !probing()),
    flush: () => actions.set("flush", !loop.flushBeforeRender),
    color: () => actions.set("color", color() === "#2973b2" ? "#e4572e" : "#2973b2")
  };
  for (const button of document.querySelectorAll("button[data-frame]")) {
    button.addEventListener("click", () => toggles[button.dataset.frame]());
    button.disabled = false;
  }

  loop.start();
  if (manual) loop.advance(clock);
  report();
}
