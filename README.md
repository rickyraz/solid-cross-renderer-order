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

The same question without the scene renderer: [experiments/baseline](experiments/baseline/baseline.jsx) uses only the DOM renderer and three ways to put a row's label into a shared container. After a swap of the keyed rows:

| Placement | Host rows | Labels in shared container |
| --- | --- | --- |
| Imperative `append` | B, A | A, B |
| Solid's `Portal` | B, A | A, B |
| Container rendered by its own `<For>` | B, A | B, A |

So the mismatch is not specific to a second renderer. Content placed in a container outside its row, even with Solid's own `Portal`, stays in mount order, and only a list that Solid itself renders follows its keys. I found no statement of an ordering guarantee for `Portal` in the 2.0 docs I searched. Run it with `npm run test:baseline` (Chromium, same setup as above).

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
