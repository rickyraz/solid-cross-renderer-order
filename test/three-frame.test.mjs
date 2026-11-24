import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

// The per-frame loop: same-frame updates with and without flush(), two ways
// to animate, unsubscribe on unmount, and the "demand" and "always" modes.
test("frame loop: lag, strategies, unsubscribe, demand", async () => {
  const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    // ?manual starts the loop in "never" mode: frames run only when stepped.
    await page.goto(new URL("../experiments/three/index.html?manual", import.meta.url).href);
    await page.locator('button[data-frame="mode"]:enabled').waitFor();
    const run = (name, ...args) => page.evaluate(([n, a]) => window.__frame[n](...a), [name, args]);

    // Imperative: 100 boxes, 100 frame callbacks, rotation follows time.
    let s = await run("snapshot");
    assert.equal(s.mode, "never");
    assert.equal(s.boxes, 100);
    assert.equal(s.subscribers, 100);
    const before = s.rotationsY;
    s = await run("advance", 3);
    assert.ok(s.rotationsY[0] > before[0], "frame callbacks rotate the boxes");

    // Same-frame updates: with flush() before render the probe's prop shows
    // the frame being drawn. Without it, the write lands one frame late.
    await run("set", "probing", true);
    s = await run("advance", 5);
    assert.deepEqual(s.lags.slice(-5), [0, 0, 0, 0, 0]);
    await run("set", "flush", false);
    s = await run("advance", 5);
    assert.deepEqual(s.lags.slice(-5), [1, 1, 1, 1, 1]);
    await run("set", "flush", true);
    await run("set", "probing", false);

    // Cost per frame, update phase only (callbacks + flush), 100 boxes.
    await run("resetStats");
    const imperative = await run("advance", 240);
    s = await run("set", "strategy", "signal");
    assert.equal(s.subscribers, 1, "one callback writes the time signal");
    assert.equal(s.boxes, 100);
    await run("resetStats");
    const signal = await run("advance", 240);
    assert.notDeepEqual(signal.rotationsY, s.rotationsY, "the time signal rotates the boxes");
    console.log("update ms per frame, 100 boxes:",
      { imperative: imperative.avgUpdateMs.toFixed(3), signal: signal.avgUpdateMs.toFixed(3) },
      "render ms:", { imperative: imperative.avgRenderMs.toFixed(3), signal: signal.avgRenderMs.toFixed(3) });

    // Unmount: every callback unsubscribes.
    s = await run("set", "spinning", false);
    assert.equal(s.boxes, 0);
    assert.equal(s.subscribers, 0);

    // Demand mode: idle means no frames.
    await run("set", "mode", "demand");
    s = await run("wait", 200);
    const idle = s.stats.frames;
    s = await run("wait", 300);
    assert.equal(s.stats.frames, idle, "no frames while nothing changes");

    // A prop change draws, then the loop sleeps again.
    await run("set", "color", "#e4572e");
    s = await run("wait", 300);
    assert.ok(s.stats.frames > idle && s.stats.frames <= idle + 2, `one frame for one change: ${s.stats.frames - idle}`);
    const afterChange = s.stats.frames;
    s = await run("wait", 300);
    assert.equal(s.stats.frames, afterChange);

    // A callback that writes a signal every frame keeps "demand" awake: the
    // write changes the scene, and the change asks for the next frame.
    await run("set", "probing", true);
    s = await run("wait", 300);
    assert.ok(s.stats.frames - afterChange > 5, `probe keeps the loop awake: ${s.stats.frames - afterChange}`);
    await run("set", "probing", false);
    s = await run("wait", 200);
    const quiet = s.stats.frames;
    s = await run("wait", 300);
    assert.equal(s.stats.frames, quiet, "asleep again once the probe is gone");

    // Spinning boxes keep "demand" awake too: they animate.
    await run("set", "spinning", true);
    s = await run("wait", 300);
    assert.ok(s.stats.frames - quiet > 5, "animating callbacks keep the loop running");

    // "always" runs every animation frame.
    await run("set", "spinning", false);
    await run("set", "mode", "always");
    const start = (await run("snapshot")).stats.frames;
    s = await run("wait", 300);
    assert.ok(s.stats.frames - start > 5, `always mode runs: ${s.stats.frames - start}`);

    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
