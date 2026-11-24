import { readFile } from "node:fs/promises";
import { transform } from "@solidjs/compiler";
import { build } from "esbuild";

await build({
  entryPoints: ["experiments/three/three.jsx"],
  outfile: "dist/three.js",
  bundle: true,
  minify: true,
  format: "iife",
  platform: "browser",
  plugins: [{
    name: "solid-universal-jsx",
    setup(builder) {
      builder.onLoad({ filter: /\.jsx$/ }, async ({ path }) => {
        const source = await readFile(path, "utf8");
        const { code } = transform(source, {
          filename: path,
          generate: "universal",
          moduleName: "./three-renderer.js"
        });
        return { contents: code, loader: "js" };
      });
    }
  }]
});
