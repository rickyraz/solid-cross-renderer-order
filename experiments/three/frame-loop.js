// A frame loop in plain JavaScript: it imports neither solid-js nor three.
//
// Each frame: run every subscriber in subscription order, call beforeRender,
// then render. A Solid binding passes Solid's flush() as beforeRender, so
// signal writes made by subscribers reach the scene before it is drawn.
//
// Modes:
//   "always": request a frame every animation frame while running.
//   "demand": request a frame only after invalidate(). A frame also asks for
//             the next one if any subscriber is active and wants to animate.
//   "never":  nothing runs by itself; call advance() to step one frame.
//             The tests use this to step frames deterministically.

export function createFrameLoop({ render, beforeRender = () => {}, mode = "always", now = () => performance.now() }) {
  const subscribers = [];
  const stats = { frames: 0, renders: 0, callbacks: 0, invalidations: 0, updateMs: 0, renderMs: 0 };
  let handle = 0;
  let running = false;
  let last;

  function frame(timestamp = now()) {
    const delta = last === undefined ? 0 : (timestamp - last) / 1000;
    last = timestamp;
    stats.frames++;
    const state = { frame: stats.frames, time: timestamp / 1000, delta };
    const t0 = now();
    // A snapshot, so subscribing or unsubscribing during a frame is safe.
    for (const subscriber of [...subscribers]) {
      if (!subscriber.active) continue;
      stats.callbacks++;
      subscriber.callback(state);
    }
    beforeRender(state);
    const t1 = now();
    render(state);
    stats.renders++;
    stats.updateMs += t1 - t0;
    stats.renderMs += now() - t1;
    return state;
  }

  function request() {
    if (!running || handle || loop.mode === "never") return;
    handle = requestAnimationFrame(timestamp => {
      handle = 0;
      frame(timestamp);
      if (loop.mode === "always" || (loop.mode === "demand" && subscribers.some(s => s.active && s.animates))) request();
    });
  }

  const loop = {
    mode,
    stats,
    // callback(state) runs every frame until the returned function is called.
    // `animates: false` means the callback only reacts, so in "demand" mode it
    // does not keep the loop awake by itself.
    subscribe(callback, { animates = true } = {}) {
      const subscriber = { callback, animates, active: true };
      subscribers.push(subscriber);
      request();
      return () => {
        subscriber.active = false;
        subscribers.splice(subscribers.indexOf(subscriber), 1);
      };
    },
    get subscriberCount() { return subscribers.length; },
    invalidate() { stats.invalidations++; request(); },
    advance(timestamp) { return frame(timestamp); },
    setMode(next) { loop.mode = next; last = undefined; request(); },
    start() { running = true; request(); },
    stop() { running = false; cancelAnimationFrame(handle); handle = 0; }
  };
  return loop;
}
