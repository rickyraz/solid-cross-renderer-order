import { createComponent, createContext, createSignal, flush, For, onCleanup, useContext } from "solid-js";
import { render as renderDOM } from "@solidjs/web";
import * as Scene from "#scene";
import { mountLabel } from "../examples/mount-only.js";
import { mountAndMoveLabel } from "../examples/sync-label-order.js";
import { drawScene } from "./draw-scene.js";

const Layer = createContext();

// Each scene slot points to a label in the shared DOM overlay.
function HtmlSlot(props) {
  const { overlay, bridge } = useContext(Layer);
  const slot = Scene.createElement("slot", { id: props.id });
  const label = props.children;
  bridge(slot, label, overlay);
  onCleanup(() => {
    label.remove();
    delete slot.label;
    delete slot.afterInsert;
  });
  return slot;
}

// Each stage owns a scene root and a DOM overlay.
function Stage(props) {
  const view = <div class="stage">
    <div class="plot">
      <p class="row-name">Scene slots</p>
      <canvas width="800" height="240" role="img"></canvas>
    </div>
    <p class="row-name overlay-title">HTML labels</p>
    <div class="overlay"></div>
    <output aria-live="polite"></output>
  </div>;
  const canvas = view.querySelector("canvas");
  const overlay = view.querySelector(".overlay");
  const status = view.querySelector("output");
  const root = Scene.createElement("root");
  const dispose = Scene.render(() => createComponent(Layer, {
    value: { overlay, bridge: props.bridge },
    get children() { return props.children; }
  }), root);

  // Read both trees after reconciliation so the display reflects their actual order.
  function refreshOrder() {
    const scene = root.children[0];
    const slotIds = scene.children.filter(node => node.tag === "slot").map(slot => slot.props.id);
    const labelIds = Array.from(overlay.children, label => label.dataset.id);
    drawScene(canvas, slotIds);
    canvas.setAttribute("aria-label", "Scene slot order: " + slotIds.join(", "));
    const match = slotIds.join() === labelIds.join();
    status.dataset.match = String(match);
    status.textContent = match ? "Orders match" : "Orders differ";
  }
  props.views.add(refreshOrder);
  onCleanup(() => {
    props.views.delete(refreshOrder);
    dispose();
  });
  return view;
}

// Both examples share this JSX and supply their own bridge.
function Example({ order, bridge, views }) {
  return <Stage bridge={bridge} views={views}>
    <scene>
      <mesh />
      <For each={order()}>{id =>
        <HtmlSlot id={id}><label data-id={id}>Label {id}</label></HtmlSlot>
      }</For>
    </scene>
  </Stage>;
}

const [order, setOrder] = createSignal(["A", "B"]);
const views = new Set();
renderDOM(() => <Example order={order} bridge={mountLabel} views={views} />,
  document.querySelector("#mount-only"));
renderDOM(() => <Example order={order} bridge={mountAndMoveLabel} views={views} />,
  document.querySelector("#sync-label-order"));

function refreshAll() {
  for (const refresh of views) refresh();
}
refreshAll();
const swapButton = document.querySelector("#swap");
swapButton.disabled = false;
swapButton.addEventListener("click", () => {
  setOrder(previous => [...previous].reverse());
  flush();
  refreshAll();
});
