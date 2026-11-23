# Do labels follow the scene?

This SolidJS 2.0 demo reproduces the shared-overlay ordering case from [Solid Discussion #5165 — Investigate cross-renderer composition guarantees in Solid 2.0](https://github.com/solidjs/solid/discussions/5165).

Clone or download this repository, open **index.html** in a browser, and click **Swap A and B**. The compiled demo is included and runs offline.

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
