import { readFile } from "node:fs/promises";
import { transform } from "@solidjs/compiler";
import { build } from "esbuild";

await build({
  entryPoints: ["experiments/baseline/baseline.jsx"],
  outfile: "dist/baseline.js",
  bundle: true,
  minify: true,
  format: "iife",
  platform: "browser",
  plugins: [{
    name: "solid-dom-jsx",
    setup(builder) {
      builder.onLoad({ filter: /\.jsx$/ }, async ({ path }) => {
        const source = await readFile(path, "utf8");
        const { code } = transform(source, { filename: path, generate: "dom", moduleName: "@solidjs/web" });
        return { contents: code, loader: "js" };
      });
    }
  }]
});
