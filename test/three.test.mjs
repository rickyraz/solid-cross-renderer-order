import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

// Pass criteria for "is @solidjs/universal enough for real three.js?":
// keyed moves keep object identity, attach works, an args change rebuilds only
// what changed, and 100 mount/unmount cycles return WebGL memory to baseline.
test("three renderer: identity, attach, args, and disposal", async () => {
  const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    await page.goto(new URL("../experiments/three/index.html?manual", import.meta.url).href);
    await page.locator('button[data-action="swap"]:enabled').waitFor();
    const run = (name, ...args) => page.evaluate(([n, a]) => window.__three[n](...a), [name, args]);

    // Mount: two slots, each with geometry, material and texture attached.
    const initial = await run("commit");
    assert.deepEqual(initial.order, ["A", "B"]);
    assert.deepEqual(initial.sceneChildren, ["world"]);
    assert.deepEqual(initial.mapsAttached, [true, true]);
    assert.deepEqual(initial.widths, [1, 1]);
    const baseline = initial.memory;
    assert.equal(baseline.geometries, 3, "fixed floor + two slots");
    assert.equal(baseline.textures, 2, "one DataTexture per slot");

    // Keyed swap: the same Mesh objects move, nothing is rebuilt.
    const swapped = await run("swap");
    assert.deepEqual(swapped.order, ["B", "A"]);
    assert.deepEqual(swapped.meshUuids, [...initial.meshUuids].reverse());
    assert.equal(swapped.stats.created, initial.stats.created);
    assert.deepEqual(swapped.memory, baseline);

    // A plain prop change mutates in place.
    const recolored = await run("recolor");
    assert.equal(recolored.stats.created, swapped.stats.created);

    // args change: new geometries, same meshes, old geometries released.
    const widened = await run("widen");
    assert.deepEqual(widened.widths, [2, 2]);
    assert.deepEqual(widened.meshUuids, swapped.meshUuids);
    assert.notDeepEqual(widened.geometryUuids, swapped.geometryUuids);
    assert.equal(widened.stats.created - recolored.stats.created, 2, "only the two geometries are rebuilt");
    assert.deepEqual(widened.memory, baseline);

    // Unmount: the slots' GPU resources are released, the floor stays.
    const hidden = await run("toggle");
    assert.deepEqual(hidden.order, []);
    assert.deepEqual(hidden.memory, { geometries: 1, textures: 0 });

    // Remount, then 100 full cycles: memory must return to baseline.
    await run("toggle");
    const after = await run("cycle", 100);
    assert.deepEqual(after.memory, baseline, "no WebGL geometries or textures leaked");
    assert.deepEqual(after.mapsAttached, [true, true]);
    assert.equal(after.stats.cancelledDisposals, 0);

    console.log("initial stats", initial.stats);
    console.log("after 100 cycles", after.stats, after.memory);
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
