// One JSX namespace for files that mix DOM and three elements, the way the
// compiler's `renderers` option allows (src/label-order-demo.jsx does this).
// TypeScript reads one jsxImportSource per file, so the two namespaces are
// merged by hand. It works for this catalogue because no tag clashes; a full
// three namespace would clash on audio, source, line and path (collisions.mjs).
import type { catalogue } from "../../catalogue.js";
import type { JSX as WebJSX } from "@solidjs/web/jsx-runtime";
import type { IntrinsicsOf, RendererNode } from "../three-jsx.js";

export namespace JSX {
  type Element = WebJSX.Element | RendererNode | ArrayElement;
  interface ArrayElement extends Array<Element> {}
  interface ElementChildrenAttribute { children: {}; }
  interface IntrinsicElements extends WebJSX.IntrinsicElements, IntrinsicsOf<typeof catalogue, Element> {}
}
