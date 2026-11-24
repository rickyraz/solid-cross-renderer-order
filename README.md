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

The scene renderer above only stores plain objects. [experiments/three](experiments/three/three.jsx) replaces it with [a renderer for real three.js objects](experiments/three/three-renderer.js) (three 0.181.2, drawn with WebGL). Each keyed slot is a `Mesh` with an attached `BoxGeometry`, `MeshBasicMaterial` and `DataTexture`. Run it with `npm run test:three`.

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

Not covered: pointer events and raycasting, JSX types for the catalogue, loaders and async resources, shared resources that the renderer must not dispose, and a per-frame loop.

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
