// The same mapping over every class three exports, as R3F types do, to
// compare type-check cost. The runtime catalogue does not have these tags,
// so these types would accept elements the renderer cannot create.
import type * as THREE from "three";
import type { IntrinsicsOf, ThreeElement } from "../three-jsx.js";

type Tags = { [K in keyof typeof THREE as Uncapitalize<K & string>]: (typeof THREE)[K] };

export namespace JSX {
  type Element = ThreeElement;
  interface ElementChildrenAttribute { children: {}; }
  interface IntrinsicElements extends IntrinsicsOf<Tags, ThreeElement> {}
}
