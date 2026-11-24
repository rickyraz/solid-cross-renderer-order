import { createEffect, createMemo, onCleanup } from "solid-js";

// The thin Solid binding over resource-cache.js. It returns an accessor that
// is pending (caught by <Loading>) until the resource for key() has loaded.
//
// The question is when to release the previous resource after key() changes.
// In Solid 2, once content has rendered, a change of key keeps the old
// content on screen until the new resource lands. So:
//
// "naive":     release in the memo's onCleanup. That runs as soon as key()
//              changes, while the old resource is still on screen.
// "committed": release in the cleanup of an effect. Effects apply only
//              committed values, so the cleanup runs when the new resource
//              has replaced the old one, or when the owner is disposed.
//              A handle that was never committed (key changed again before
//              it loaded) is released by the memo's onCleanup.
export function useResource(cache, key, mode = "committed") {
  let committed;
  const handle = createMemo(async () => {
    const h = cache.acquire(key());
    onCleanup(() => { if (mode === "naive" || h !== committed) h.release(); });
    await h.promise;
    return h;
  });
  if (mode === "committed") {
    createEffect(() => handle(), h => {
      committed = h;
      return () => h.release();
    });
  }
  return () => handle().value;
}
