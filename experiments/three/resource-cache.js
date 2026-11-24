// A reference-counted cache for loaded resources (textures, geometries, ...).
// Plain JavaScript: it imports neither solid-js nor three, so the same cache
// could back a Solid binding, a renderer, or imperative code.
//
// acquire(key) returns a handle and adds one reference. The first acquire
// starts the load; later ones share it. handle.release() drops the reference.
// When the count reaches zero the resource is disposed, after one microtask,
// so a release followed by an acquire of the same key in the same tick (a
// remount, a keyed move) keeps the resource instead of loading it again.
// If the count reaches zero while the load is still pending, the resource is
// disposed as soon as it arrives ("late disposal").

export function createResourceCache({ load, dispose = resource => resource?.dispose?.() }) {
  const entries = new Map(); // key -> { refs, promise, value, settled }
  const stats = { loads: 0, hits: 0, disposed: 0, lateDisposed: 0 };

  function destroy(entry) {
    entries.delete(entry.key);
    entry.dead = true;
    if (entry.settled) { dispose(entry.value); stats.disposed++; }
  }

  function acquire(key) {
    let entry = entries.get(key);
    if (entry) stats.hits++;
    else {
      stats.loads++;
      entry = { key, refs: 0, value: undefined, settled: false, dead: false };
      entry.promise = Promise.resolve(load(key)).then(value => {
        entry.value = value;
        entry.settled = true;
        // Every user left before the load finished.
        if (entry.dead) { dispose(value); stats.disposed++; stats.lateDisposed++; }
        return value;
      });
      entries.set(key, entry);
    }
    entry.refs++;
    let released = false;
    return {
      key,
      promise: entry.promise,
      get value() { return entry.value; },
      release() {
        if (released) return;
        released = true;
        if (--entry.refs > 0) return;
        queueMicrotask(() => { if (entry.refs === 0 && !entry.dead) destroy(entry); });
      }
    };
  }

  return {
    acquire,
    stats,
    refs: key => entries.get(key)?.refs ?? 0,
    keys: () => [...entries.keys()]
  };
}
