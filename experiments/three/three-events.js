import { Raycaster, Vector2 } from "three";
import { instanceOf, onInstanceDispose } from "./three-renderer.js";

// Pointer events for the three renderer. @solidjs/universal has no notion of
// events, so this file does what the DOM does for elements: hit testing,
// bubbling, hover, pointer capture, and forgetting nodes that are gone.
//
// Rules, modelled on the DOM:
// - One raycast per pointer event, against the whole scene, nearest hit first.
// - An event bubbles from the hit object up through its parents. Each node
//   with a matching handler gets it once, even if several faces were hit.
// - stopPropagation() stops parents and every farther hit.
// - Hover follows only the nearest hit and its parents, like :hover.
// - setPointerCapture() sends later moves and the next up to one node, even
//   when the ray misses it. Pointer up releases the capture.
// - A click reaches a node only if the pointer went down on it too.
// - A node that is disposed is dropped from hover, capture and down state,
//   without an out event: its owner is gone, so its handlers must not run.

export function createEvents({ canvas, camera, scene, afterEvent = () => {} }) {
  const raycaster = new Raycaster();
  const ndc = new Vector2();
  let hovered = [];               // nodes under the pointer, nearest hit first
  const captures = new Map();     // pointerId -> node
  let pressed = new Set();        // nodes the pointer went down on
  const stats = { raycasts: 0, delivered: 0, dropped: 0 };

  function intersect(native) {
    const rect = canvas.getBoundingClientRect();
    ndc.set(((native.clientX - rect.left) / rect.width) * 2 - 1,
      -((native.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    stats.raycasts++;
    return raycaster.intersectObject(scene, true);
  }

  // The node for a three object and each of its parents that has handlers.
  function path(object) {
    const nodes = [];
    for (let o = object; o; o = o.parent) {
      const node = instanceOf.get(o);
      if (node?.handlers) nodes.push(node);
    }
    return nodes;
  }

  function call(node, name, native, hit, intersections, state) {
    const handler = node.handlers?.[name];
    if (!handler) return;
    stats.delivered++;
    handler({
      type: name,
      nativeEvent: native,
      pointerId: native.pointerId,
      object: hit?.object,          // the object the ray hit
      eventObject: node.object,     // the object whose handler runs
      point: hit?.point,
      distance: hit?.distance,
      intersections,
      stopPropagation() { state.stopped = true; },
      setPointerCapture() {
        captures.set(native.pointerId, node);
        try { canvas.setPointerCapture(native.pointerId); } catch {}
      },
      releasePointerCapture() { release(native.pointerId); }
    });
  }

  // Deliver along every hit, nearest first, bubbling through parents.
  function dispatch(name, native, hits, only) {
    const state = { stopped: false };
    const seen = new Set();
    for (const hit of hits) {
      for (const node of path(hit.object)) {
        if (seen.has(node)) continue;
        seen.add(node);
        if (only && !only.has(node)) continue;
        call(node, name, native, hit, hits, state);
        if (state.stopped) return;
      }
    }
  }

  function release(pointerId) {
    captures.delete(pointerId);
    try { canvas.releasePointerCapture(pointerId); } catch {}
  }

  function updateHover(native, hits) {
    const next = hits.length ? path(hits[0].object) : [];
    for (const node of hovered) {
      if (!next.includes(node)) call(node, "onPointerOut", native, undefined, hits, { stopped: false });
    }
    for (const node of next) {
      if (!hovered.includes(node)) call(node, "onPointerOver", native, hits[0], hits, { stopped: false });
    }
    hovered = next;
  }

  const listeners = {
    pointermove(native) {
      const hits = intersect(native);
      const captured = captures.get(native.pointerId);
      if (captured) {
        // Hover stays where it was while captured, as in the DOM.
        const hit = hits.find(h => path(h.object).includes(captured));
        call(captured, "onPointerMove", native, hit, hits, { stopped: false });
        return;
      }
      updateHover(native, hits);
      dispatch("onPointerMove", native, hits);
    },
    pointerdown(native) {
      const hits = intersect(native);
      pressed = new Set(hits.flatMap(hit => path(hit.object)));
      dispatch("onPointerDown", native, hits);
    },
    pointerup(native) {
      const hits = intersect(native);
      const captured = captures.get(native.pointerId);
      if (captured) {
        const hit = hits.find(h => path(h.object).includes(captured));
        call(captured, "onPointerUp", native, hit, hits, { stopped: false });
        release(native.pointerId);
        updateHover(native, hits);
        return;
      }
      dispatch("onPointerUp", native, hits);
    },
    click(native) {
      const hits = intersect(native);
      // A drag that starts on A and ends on B is not a click on either.
      dispatch("onClick", native, hits, pressed);
      pressed = new Set();
    },
    pointerleave(native) {
      if (captures.has(native.pointerId)) return;
      updateHover(native, []);
    }
  };

  const wrapped = {};
  for (const [type, listener] of Object.entries(listeners)) {
    wrapped[type] = native => { listener(native); afterEvent(type); };
    canvas.addEventListener(type, wrapped[type]);
  }

  const stopListening = onInstanceDispose(node => {
    const before = hovered.length + captures.size + pressed.size;
    hovered = hovered.filter(n => n !== node);
    for (const [id, n] of captures) if (n === node) release(id);
    pressed.delete(node);
    stats.dropped += before - (hovered.length + captures.size + pressed.size);
  });

  return {
    stats,
    debug: () => ({ hoveredNodes: hovered.map(n => n.object.name), captured: [...captures.values()].map(n => n.object.name) }),
    dispose() {
      for (const [type, listener] of Object.entries(wrapped)) canvas.removeEventListener(type, listener);
      stopListening();
    }
  };
}
