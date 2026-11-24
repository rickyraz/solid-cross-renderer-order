import { flush, onCleanup } from "solid-js";
import { createFrameLoop } from "./frame-loop.js";

// The Solid binding over frame-loop.js: two functions.

// A frame loop that runs Solid's flush() before each render, so a signal
// written by a frame callback is applied to three in the same frame.
// Set loop.flushBeforeRender = false to see what happens without it.
export function createSolidFrameLoop(options) {
  const loop = createFrameLoop({
    ...options,
    beforeRender: () => { if (loop.flushBeforeRender) flush(); }
  });
  loop.flushBeforeRender = true;
  return loop;
}

// Run callback(state) every frame while the calling component is mounted.
export function useFrame(loop, callback, options) {
  onCleanup(loop.subscribe(callback, options));
}
