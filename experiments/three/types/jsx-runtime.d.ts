// JSX types for three-renderer.js, built from the runtime catalogue
// (catalogue.js). Point a file at it with
//   /** @jsxImportSource three-jsx */  or  "jsxImportSource": "three-jsx"
// (tsconfig paths map "three-jsx/jsx-runtime" to this file).
import type { catalogue } from "../catalogue.js";
import type { IntrinsicsOf, ThreeElement } from "./three-jsx.js";

export namespace JSX {
  type Element = ThreeElement;
  interface ElementChildrenAttribute { children: {}; }
  interface IntrinsicElements extends IntrinsicsOf<typeof catalogue, ThreeElement> {}
}
