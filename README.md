# Do labels follow the scene?

This SolidJS 2.0 demo reproduces the shared-overlay ordering case from [Solid Discussion #5165 — Investigate cross-renderer composition guarantees in Solid 2.0](https://github.com/solidjs/solid/discussions/5165).

Open the [live demo](https://rickyraz.github.io/solid-cross-renderer-order/) and click **Swap A and B** to compare the two bridges. To try it offline, clone or download this repository and open **index.html**.

## What moves?

Both examples read the same Solid signal, initially `["A", "B"]`. Each scene contains a fixed mesh and two keyed slots. Each slot has one HTML label in a shared DOM overlay. The 2D canvas shows sibling order from left to right. The cube represents A and the diamond represents B.

| After one swap | Scene slots | HTML labels |
| --- | --- | --- |
| Mount labels once | B, A | A, B |
| Move labels with their slots | B, A | B, A |

## Follow the code

1. [Shared JSX](src/label-order-demo.jsx) — Both panels use the same `Example` component. Solid's `<For>` keeps the slots alive when their keys move. `Stage` owns the scene root and the overlay. `HtmlSlot` connects each slot to its HTML label. The [compiler configuration](build.mjs) routes HTML elements to the DOM renderer and the scene and mesh elements to the custom renderer.
2. [Mount-only bridge](examples/mount-only.js) — `mountLabel` appends each label when its slot is created. Swapping existing slots leaves their labels in the original DOM order.
3. [Scene renderer](src/scene-renderer.js) — `insertNode` updates the order in `parent.children`. At that point the scene order is correct in both examples. The optional `afterInsert` callback lets a bridge respond to the move.
4. [Bridge that follows slot order](examples/sync-label-order.js) — `mountAndMoveLabel` registers that callback. It moves the existing label before the next slot’s label in the same overlay, or to the end if that slot has no following label.

## Who keeps the labels in order?

The experiment shows that a bridge can keep a shared overlay in sync using existing APIs. Should Solid guarantee this ordering, or should each bridge handle it?

## Is this by design? A one-renderer baseline

The same question without the scene renderer: [experiments/baseline](experiments/baseline/baseline.jsx) ([live page](https://rickyraz.github.io/solid-cross-renderer-order/experiments/baseline/)) uses only the DOM renderer and three ways to put a row's label into a shared container. After a swap of the keyed rows:

| Placement | Host rows | Labels in shared container |
| --- | --- | --- |
| Imperative `append` | B, A | A, B |
| Solid's `Portal` | B, A | A, B |
| Container rendered by its own `<For>` | B, A | B, A |

So the mismatch is not specific to a second renderer. Content placed in a container outside its row, even with Solid's own `Portal`, stays in mount order, and only a list that Solid itself renders follows its keys. I found no statement of an ordering guarantee for `Portal` in the 2.0 docs I searched. Run it with `npm run test:baseline` (Chromium, same setup as above).

## Is `@solidjs/universal` enough for real three.js?

The scene renderer above only stores plain objects. [experiments/three](experiments/three/main-scene.jsx) replaces it with [a renderer for real three.js objects](experiments/three/three-renderer.js) (three 0.181.2, drawn with WebGL). Each keyed slot is a `Mesh` with an attached `BoxGeometry`, `MeshBasicMaterial` and `DataTexture`. Run it with `npm run test:three`.

| Check | Result |
| --- | --- |
| Keyed swap | The same `Mesh` objects move. No object is rebuilt. |
| Prop change (`color`) | The existing `Color` is mutated in place. |
| `args` change (box width) | Only the two geometries are rebuilt. The meshes keep their identity, and WebGL memory stays at 3 geometries and 2 textures. |
| Unmount | Memory drops to the floor's 1 geometry and 0 textures. |
| 100 unmount, remount, swap and resize cycles | Memory returns to 3 geometries and 2 textures. 1,532 objects created, 1,216 disposed. The other 316 are 308 `Group` and `Mesh` objects (three's `Object3D` has no `dispose`) and the 8 live resources. |

It works, but the renderer has to fill these gaps itself:

1. **A shadow tree.** Material, geometry and texture never appear in `Object3D.children`, but Solid needs `getParentNode` and `getNextSibling` for every node. Solid holds a wrapper, not the three object.
2. **Ordered insertion.** Solid moves a keyed node with `insertNode(parent, node, anchor)` alone, without `removeNode`. `Object3D.add()` always appends, so the renderer splices `children` and fires `added` and `childadded` itself.
3. **Constructor arguments arrive late.** The compiler passes only literal props to `createElement`. A dynamic `args={[width(), 1, 1]}` arrives through `setProperty` after the object was built with no arguments, so every object with dynamic `args` is built twice (4 of the first 17 objects were thrown away). Because Solid holds the wrapper, the wrapper can swap in a new object. The cost is that refs receive the wrapper, not the three object.
4. **Removal is not disposal.** `removeNode` is called only for the top node of a removed subtree, and a held node could be inserted again. The renderer waits one microtask before it disposes the subtree, and cancels the disposal if the node comes back.
5. **Text nodes.** three has none, but Solid creates them. Each `<Show>` mount adds an empty sentinel text node (102 after 100 cycles).

### Pointer events and raycasting

`@solidjs/universal` has no event API. `onClick={fn}` reaches `createElement` as an ordinary prop (a function is a literal, so it arrives at creation time). The renderer stores handlers on the node, and [an event system of about 160 lines](experiments/three/three-events.js) does the rest. The example has its own canvas ([`events-scene.jsx`](experiments/three/events-scene.jsx)), and the test drives it with real mouse input (`test/three-events.test.mjs`):

| Behavior | Rule | Tested by |
| --- | --- | --- |
| Hit testing | One raycast per pointer event against the whole scene, nearest hit first | Hover and clicks land on A, B, the floor, or nothing |
| Bubbling | From the hit mesh up through its parents, each node once | A's click also reaches the `slots` group |
| `stopPropagation()` | Stops parents and every farther hit | B's click does not reach the group |
| Hover | Nearest hit and its parents only, like `:hover` | Over and out counts, and the hover color prop |
| Pointer capture | Moves and the next up go to the capturing node, even off the mesh | Dragging A across B: B gets no `pointerover`, A gets every move |
| Click | Only nodes the pointer went down on | A drag is not a click. A drag from A to B clicks only their shared group, as a DOM click goes to the common ancestor |
| Disposal | A hovered or captured node is dropped with no `pointerout` | Unmounting during hover or capture fires nothing and leaves no capture |

What this adds to the renderer's list:

6. **A map from three objects back to nodes.** A raycast returns three objects, but handlers live on the wrapper. The renderer keeps a `WeakMap` and updates it when `args` rebuilds an object.
7. **A dispose hook for the event system.** Hover, capture and pressed state hold nodes. Without a hook from `disposeTree`, they keep disposed nodes and call their handlers.
8. **Stale app state after unmount.** Because a disposed node gets no `pointerout`, a hover signal written by `onPointerOver` stays set. The component has to clear it in `onCleanup`. Firing `pointerout` instead would run a handler whose owner is already disposed.

Not measured: raycast cost in large scenes (every pointer move tests the whole scene), touch and multi-pointer input, and instanced meshes.

### Async loaders and shared resources

A second canvas with its own `WebGLRenderer`, so its GPU counters stand alone. Three boxes load a texture from a fake loader that the test resolves by hand. Left and middle use the same key and share one texture. Three pieces:

- [`resource-cache.js`](experiments/three/resource-cache.js): a reference-counted cache with no imports. The first `acquire(key)` starts the load and later ones share it. When the count reaches zero, it disposes after one microtask, so a remount in the same tick keeps the resource. A resource whose users all left before it loaded is disposed as soon as it arrives.
- [`use-resource.js`](experiments/three/use-resource.js): the Solid binding, an async `createMemo` read under `<Loading>`, with two release strategies.
- [`async-scene.jsx`](experiments/three/async-scene.jsx): the boxes, with a wireframe `<Loading>` fallback.

Results (`test/three-async.test.mjs`, run once per strategy):

| Check | Result |
| --- | --- |
| `<Loading>` through the three renderer | Wireframe placeholders until each texture lands, then the textured box. Placeholder geometry is disposed. |
| Shared texture | One load for two boxes. Hiding one keeps the texture. Hiding both disposes it. |
| Changing the texture key | The old texture stays on screen and referenced until the new one lands, then it is released and disposed. |
| Hiding a box while its texture loads | The texture is disposed on arrival and never reaches the GPU. |
| Key changed again before the first load lands | The superseded load is released at once and disposed on arrival. |
| Everything hidden | 0 geometries and 0 textures on the GPU. Every texture ever loaded was disposed. |
| Remount in the same tick | The cached textures are reused without a reload. |

**A hypothesis that failed.** I expected that releasing in the async memo's `onCleanup` (the *naive* strategy) would dispose the texture still on screen, because Solid 2 keeps old content visible while new data loads. It does not. In Solid 2.0.3, the `onCleanup` of the run on screen waits until its replacement lands, while a run that never reached the screen is cleaned up at once. Both strategies pass the same test. I found this only by testing, not in the docs I searched, so the *committed* strategy is the one to rely on: it releases in the cleanup of a `createEffect`, which by its documented contract runs before the next applied value or on disposal. The *naive* test stays as a tripwire: if a Solid update changes the timing, it fails.

What this adds to the renderer's list:

9. **Ownership is outside the renderer.** The renderer disposes only what it constructed. A texture passed as a prop (`map={texture()}`) is never disposed by the renderer, so shared resources need their own owner: here, the cache.
10. **The cache must know about late arrivals.** Without late disposal, every load that loses a race leaks a texture.

Not measured: load errors and retries, `<Errored>` boundaries, cancelling a load in flight (the fake loader cannot abort), and real network loaders.

Still not covered: JSX types for the catalogue and a per-frame loop.

## Build and test

To edit the demo, use Node.js 22.12 or later. Run the following commands from this folder, then reload **index.html**.

```sh
npm ci
npm run build
```

To run the Chromium test, use the following commands.

```sh
npx playwright install --only-shell chromium
npm test
```

The test opens the local file, swaps the slots with a click, and swaps them back with Enter. It checks the scene order, DOM order, and identity of all four labels. The mount-only example is expected to show different orders after the first swap.
