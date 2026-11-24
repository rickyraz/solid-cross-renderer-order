// Which three.js JSX tags (uncapitalized class names) are also DOM, SVG or
// MathML tags in @solidjs/web's JSX types? A file that wants both kinds of
// element would need one merged namespace, and these names would clash.
// Run: node experiments/three/types/collisions.mjs
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import * as THREE from "three";

const require = createRequire(import.meta.url);
const jsx = readFileSync(require.resolve("@solidjs/web/types/jsx.d.ts"), "utf8");

function tagsOf(interfaceName) {
  const start = jsx.indexOf(`interface ${interfaceName} {`);
  const end = jsx.indexOf("\n  }", start);
  return [...jsx.slice(start, end).matchAll(/^\s{4}"?([a-zA-Z][\w-]*)"?\??:/gm)].map(m => m[1]);
}

const web = {
  html: tagsOf("HTMLElementTags"),
  svg: tagsOf("SVGElementTags"),
  mathml: tagsOf("MathMLElementTags")
};
const three = Object.entries(THREE)
  .filter(([, value]) => typeof value === "function" && /^[A-Z]/.test(value.name ?? ""))
  .map(([name]) => name[0].toLowerCase() + name.slice(1));

const clashes = {};
for (const [kind, tags] of Object.entries(web)) {
  const set = new Set(tags);
  clashes[kind] = three.filter(tag => set.has(tag));
}
console.log(JSON.stringify({
  threeTags: three.length,
  webTags: Object.fromEntries(Object.entries(web).map(([k, v]) => [k, v.length])),
  clashes
}, null, 2));
