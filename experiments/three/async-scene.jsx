import { createSignal, flush, For, Loading, Show } from "solid-js";
import { DataTexture, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createResourceCache } from "./resource-cache.js";
import { render, rootOf, stats } from "./three-renderer.js";
import { useResource } from "./use-resource.js";

// Async loading and shared resources, in a second canvas with its own
// WebGLRenderer so its memory counters stand alone.
//
// Left and middle use the same texture key, so they share one texture.
// Right has its own. A fake loader stands in for TextureLoader: each load
// waits until it is resolved, by a timer on the page or by the test.

const colors = { red: [214, 69, 65], green: [64, 160, 90], blue: [52, 110, 200], gray: [120, 120, 120] };

function createFakeLoader({ auto }) {
  const pending = new Map(); // key -> resolve
  const loader = {
    auto,
    calls: [],
    pending: () => [...pending.keys()],
    load(key) {
      loader.calls.push(key);
      return new Promise(done => {
        const finish = () => {
          pending.delete(key);
          const [r, g, b] = colors[key];
          const data = new Uint8Array(16).map((_, i) => (i % 4 === 3 ? 255 : [r, g, b][i % 4] + ((i >> 2) % 3 === 0 ? 40 : 0)));
          const texture = new DataTexture(data, 2, 2);
          texture.needsUpdate = true;
          texture.userData = { key, disposed: false };
          texture.addEventListener("dispose", () => { texture.userData.disposed = true; });
          done(texture);
        };
        pending.set(key, finish);
        if (loader.auto) setTimeout(() => pending.get(key)?.(), 700);
      });
    },
    resolve(key) { pending.get(key)?.(); }
  };
  return loader;
}

const loader = createFakeLoader({ auto: !new URLSearchParams(location.search).has("manual") });
const cache = createResourceCache({ load: key => loader.load(key) });

const [shared, setShared] = createSignal("red");
const [mode, setMode] = createSignal("committed");
const [visible, setVisible] = createSignal({ left: true, middle: true, right: true });

function TexturedBox(props) {
  const map = useResource(cache, () => props.textureKey, props.mode);
  return <mesh name={props.name} position={[props.x, 0, 0]} rotation={[0.5, 0.6, 0]}>
    <boxGeometry />
    <meshBasicMaterial map={map()} />
  </mesh>;
}

// <Loading> shows a wireframe box while the texture is pending.
function Slot(props) {
  return <Loading fallback={
    <mesh name={props.name + "-loading"} position={[props.x, 0, 0]} rotation={[0.5, 0.6, 0]}>
      <boxGeometry />
      <meshBasicMaterial color="#999999" wireframe={true} />
    </mesh>
  }>
    <TexturedBox name={props.name} x={props.x} textureKey={props.textureKey} mode={props.mode} />
  </Loading>;
}

const canvas = document.querySelector("#async-canvas");
const scene = new Scene();
const camera = new PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 100);
camera.position.set(0, 0, 6);
const renderer = new WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setClearColor(0xf4f4f4);

// Changing the mode remounts every slot with the other release strategy.
render(() => <group name="async-world">
  <For each={[mode()]}>{m => <group name={"mode-" + m}>
    <Show when={visible().left}><Slot name="left" x={-2} textureKey={shared()} mode={m} /></Show>
    <Show when={visible().middle}><Slot name="middle" x={0} textureKey={shared()} mode={m} /></Show>
    <Show when={visible().right}><Slot name="right" x={2} textureKey="gray" mode={m} /></Show>
  </group>}</For>
</group>, rootOf(scene));

function snapshot() {
  const slots = {};
  for (const name of ["left", "middle", "right"]) {
    const mesh = scene.getObjectByName(name);
    const placeholder = scene.getObjectByName(name + "-loading");
    slots[name] = mesh?.parent ? {
      shown: "textured",
      map: mesh.material.map?.userData.key ?? null,
      mapDisposed: mesh.material.map?.userData.disposed ?? null
    } : placeholder?.parent ? { shown: "loading" } : { shown: "none" };
  }
  return {
    mode: mode(),
    shared: shared(),
    slots,
    refs: Object.fromEntries(cache.keys().map(key => [key, cache.refs(key)])),
    cache: { ...cache.stats },
    loader: { calls: [...loader.calls], pending: loader.pending() },
    memory: { ...renderer.info.memory },
    renderer: { ...stats }
  };
}

const status = document.querySelector("#async-status");
// Let promise callbacks, Solid's batched updates and deferred disposals run.
async function commit() {
  for (let i = 0; i < 4; i++) {
    flush();
    await new Promise(r => setTimeout(r, 0));
  }
  flush();
  renderer.render(scene, camera);
  const s = snapshot();
  const show = n => s.slots[n].shown === "textured" ? `${n} ${s.slots[n].map}${s.slots[n].mapDisposed ? " (DISPOSED)" : ""}` : `${n} ${s.slots[n].shown}`;
  status.textContent = `${s.mode} · ${["left", "middle", "right"].map(show).join(" · ")} · ` +
    `loads ${s.cache.loads} · disposed ${s.cache.disposed} (late ${s.cache.lateDisposed}) · ` +
    `GPU textures ${s.memory.textures}`;
  return s;
}

const order = ["red", "green", "blue"];
const actions = {
  nextShared: () => { setShared(k => order[(order.indexOf(k) + 1) % order.length]); return commit(); },
  setShared: key => { setShared(key); return commit(); },
  toggle: name => { setVisible(v => ({ ...v, [name]: !v[name] })); return commit(); },
  setMode: m => { setMode(m); return commit(); },
  resolve: key => { loader.resolve(key); return commit(); },
  snapshot,
  commit
};
window.__async = actions;

// Redraw when an automatic load lands.
const autoLoad = loader.load;
loader.load = key => autoLoad(key).then(value => { setTimeout(commit, 0); return value; });

for (const button of document.querySelectorAll("button[data-async]")) {
  const [name, arg] = button.dataset.async.split(":");
  button.addEventListener("click", () => {
    if (name === "setMode") {
      const next = mode() === "committed" ? "naive" : "committed";
      button.textContent = `Release strategy: ${next}`;
      return actions.setMode(next);
    }
    return actions[name](arg);
  });
  button.disabled = false;
}
commit();
