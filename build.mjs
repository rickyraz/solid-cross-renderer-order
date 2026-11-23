import { readFile } from "node:fs/promises";
import { transform } from "@solidjs/compiler";
import { build } from "esbuild";

await build({
  entryPoints: ["src/label-order-demo.jsx"],
  outfile: "dist/label-order-demo.js",
  bundle: true,
  minify: true,
  format: "iife",
  platform: "browser",
  plugins: [{
    name: "solid-dynamic-jsx",
    setup(builder) {
      builder.onLoad({ filter: /\.jsx$/ }, async ({ path }) => {
        const source = await readFile(path, "utf8");
        const { code } = transform(source, {
          filename: path,
          generate: "dynamic",
          moduleName: "#scene",
          renderers: [{
            name: "dom",
            moduleName: "@solidjs/web",
            elements: ["div", "canvas", "p", "label", "output"]
          }]
        });
        return { contents: code, loader: "js" };
      });
    }
  }]
});
