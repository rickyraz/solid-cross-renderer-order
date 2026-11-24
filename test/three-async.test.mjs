import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

// Async loading through <Loading>, a shared reference-counted texture, the old
// texture kept on screen while the new one loads, late disposal, superseded
// loads, and GPU memory at zero after everything is hidden. Both release
// strategies run the same script, because both behave the same on Solid 2.0.3.
// If a Solid update changes when an async memo's onCleanup runs, "naive" fails.
for (const mode of ["committed", "naive"]) {
  test(`async resources (${mode})`, async () => {
    const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
    try {
      const page = await browser.newPage();
      const errors = [];
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
      await page.goto(new URL("../experiments/three/index.html?manual", import.meta.url).href);
      await page.locator('button[data-async="nextShared"]:enabled').waitFor();
      const run = (name, ...args) => page.evaluate(([n, a]) => window.__async[n](...a), [name, args]);
      const shown = s => Object.fromEntries(Object.entries(s.slots).map(([k, v]) => [k, v.shown === "textured" ? v.map : v.shown]));

      let s = await run("commit");
      if (mode === "naive") {
        // Remount with the other strategy before anything has loaded.
        s = await run("setMode", "naive");
        assert.equal(s.mode, "naive");
      }

      // Pending: wireframe placeholders. Left and middle share one load.
      assert.deepEqual(shown(s), { left: "loading", middle: "loading", right: "loading" });
      assert.deepEqual(s.loader.pending.sort(), ["gray", "red"]);
      assert.deepEqual(s.refs, { red: 2, gray: 1 });

      s = await run("resolve", "red");
      assert.deepEqual(shown(s), { left: "red", middle: "red", right: "loading" });
      s = await run("resolve", "gray");
      assert.deepEqual(shown(s), { left: "red", middle: "red", right: "gray" });
      assert.deepEqual(s.memory, { geometries: 3, textures: 2 });

      // Change the shared texture: the old one stays on screen, not disposed.
      s = await run("setShared", "green");
      assert.deepEqual(shown(s), { left: "red", middle: "red", right: "gray" });
      assert.equal(s.slots.left.mapDisposed, false);
      assert.deepEqual(s.refs, { red: 2, gray: 1, green: 2 }, "red is held until green lands");
      s = await run("resolve", "green");
      assert.deepEqual(shown(s), { left: "green", middle: "green", right: "gray" });
      assert.deepEqual(s.refs, { gray: 1, green: 2 });
      assert.deepEqual(s.memory, { geometries: 3, textures: 2 }, "red was released and disposed");

      // Shared: hiding one user keeps the texture, hiding both disposes it.
      s = await run("toggle", "middle");
      assert.deepEqual(s.refs, { gray: 1, green: 1 });
      assert.equal(s.slots.left.mapDisposed, false);
      s = await run("toggle", "left");
      assert.deepEqual(s.refs, { gray: 1 });
      assert.deepEqual(s.memory, { geometries: 1, textures: 1 });

      // Late disposal: hide a box while its texture is still loading.
      s = await run("toggle", "left");
      assert.equal(s.slots.left.shown, "loading");
      const late = s.cache.lateDisposed;
      s = await run("toggle", "left");
      s = await run("resolve", "green");
      assert.equal(s.cache.lateDisposed, late + 1);
      assert.deepEqual(s.memory, { geometries: 1, textures: 1 }, "the late texture never reached the GPU");

      // Superseded load: blue is replaced by red before it lands.
      await run("toggle", "left");
      await run("toggle", "middle");
      s = await run("resolve", "green");
      assert.deepEqual(shown(s), { left: "green", middle: "green", right: "gray" });
      await run("setShared", "blue");
      s = await run("setShared", "red");
      assert.deepEqual(shown(s), { left: "green", middle: "green", right: "gray" });
      assert.deepEqual(s.refs, { gray: 1, green: 2, red: 2 }, "blue was released before it loaded");
      s = await run("resolve", "blue");
      assert.equal(s.cache.lateDisposed, late + 2);
      assert.deepEqual(shown(s), { left: "green", middle: "green", right: "gray" });
      s = await run("resolve", "red");
      assert.deepEqual(shown(s), { left: "red", middle: "red", right: "gray" });
      assert.deepEqual(s.memory, { geometries: 3, textures: 2 });

      // Hide everything: nothing left in the cache or on the GPU.
      for (const name of ["left", "middle", "right"]) await run("toggle", name);
      s = await run("commit");
      assert.deepEqual(s.refs, {});
      assert.deepEqual(s.memory, { geometries: 0, textures: 0 });
      assert.equal(s.cache.disposed, s.cache.loads, "every texture ever loaded was disposed");

      // A remount in the same tick reuses the cached texture without a reload.
      for (const name of ["left", "middle", "right"]) await run("toggle", name);
      for (const key of ["red", "gray"]) await run("resolve", key);
      const beforeRemount = await run("commit");
      s = await run("setMode", mode === "naive" ? "committed" : "naive");
      assert.equal(s.cache.loads, beforeRemount.cache.loads, "no reload on remount");
      assert.deepEqual(shown(s), { left: "red", middle: "red", right: "gray" });

      assert.deepEqual(errors, []);
    } finally {
      await browser.close();
    }
  });
}
