import { createSignal, flush, For, onCleanup } from "solid-js";
import { render, Portal } from "@solidjs/web";

// Baseline with ONE renderer (DOM only). Three ways to place a row's label
// in a container shared by all rows. Do labels follow the rows when they swap?
const [order, setOrder] = createSignal(["A", "B"]);
const refreshers = new Set();

function Case(props) {
  const overlay = <div class="overlay"></div>;
  const status = <output aria-live="polite"></output>;
  function refresh() {
    const host = Array.from(document.querySelectorAll("#" + props.id + " .host > li"), li => li.dataset.id);
    const labels = Array.from(overlay.querySelectorAll("label"), label => label.dataset.id);
    status.dataset.match = String(host.join() === labels.join());
    status.textContent = "host " + host.join("") + " / labels " + labels.join("");
  }
  refreshers.add(refresh);
  onCleanup(() => refreshers.delete(refresh));
  return <section id={props.id}>
    <h2>{props.title}</h2>
    <p class="note">{props.note}</p>
    <ol class="host">
      <For each={order()}>{id => <li data-id={id}>{id}{props.row(id, overlay)}</li>}</For>
    </ol>
    {overlay}
    {status}
  </section>;
}

// 1. Imperative append, like examples/mount-only.js, but with no second renderer.
function appendRow(id, overlay) {
  const label = <label data-id={id}>Label {id}</label>;
  overlay.append(label);
  onCleanup(() => label.remove());
  return null;
}

// 2. Solid's own Portal into the shared container.
function portalRow(id, overlay) {
  return <Portal mount={overlay}><label data-id={id}>Label {id}</label></Portal>;
}

// 3. The overlay is rendered by its own keyed list, so Solid owns the ordering.
function ManagedCase() {
  const overlay = <div class="overlay">
    <For each={order()}>{id => <label data-id={id}>Label {id}</label>}</For>
  </div>;
  const status = <output aria-live="polite"></output>;
  function refresh() {
    const host = Array.from(document.querySelectorAll("#managed .host > li"), li => li.dataset.id);
    const labels = Array.from(overlay.querySelectorAll("label"), label => label.dataset.id);
    status.dataset.match = String(host.join() === labels.join());
    status.textContent = "host " + host.join("") + " / labels " + labels.join("");
  }
  refreshers.add(refresh);
  onCleanup(() => refreshers.delete(refresh));
  return <section id="managed">
    <h2>3. Overlay rendered by its own For</h2>
    <p class="note">Both lists read the same signal, so Solid keeps each in key order.</p>
    <ol class="host"><For each={order()}>{id => <li data-id={id}>{id}</li>}</For></ol>
    {overlay}
    {status}
  </section>;
}

render(() => <>
  <Case id="append" title="1. Imperative append" note="Label appended once when the row is created." row={appendRow} />
  <Case id="portal" title="2. Portal into the shared overlay" note="Each row renders its label through Solid's Portal." row={portalRow} />
  <ManagedCase />
</>, document.querySelector("#app"));

function refreshAll() { for (const refresh of refreshers) refresh(); }
refreshAll();
const swap = document.querySelector("#swap");
swap.disabled = false;
swap.addEventListener("click", () => {
  setOrder(previous => [...previous].reverse());
  flush();
  refreshAll();
});
