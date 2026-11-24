import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

// Real mouse input on the WebGL canvas: hit testing, bubbling, stopPropagation,
// hover, pointer capture, click rules, and cleanup when a hovered or captured
// mesh is unmounted.
test("three events: raycast, bubble, hover, capture, dispose", async () => {
  const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    await page.goto(new URL("../experiments/three/index.html", import.meta.url).href);
    await page.locator('button[data-action="swap"]:enabled').waitFor();

    const run = (name, ...args) => page.evaluate(([n, a]) => window.__three[n](...a), [name, args]);
    const settle = () => run("commit");
    const A = await run("screenOf", "A");
    const B = await run("screenOf", "B");
    const box = await page.locator("canvas").boundingBox();
    const empty = { x: box.x + 20, y: box.y + 20 };
    const floor = await run("screenOf", "fixed");

    // Hover: nearest hit only, and the handler's signal drives the color prop.
    await page.mouse.move(empty.x, empty.y);
    let s = await settle();
    assert.equal(s.events.hovered, null);
    await page.mouse.move(A.x, A.y);
    s = await settle();
    assert.equal(s.events.hovered, "A");
    assert.deepEqual(s.events.log.over, { A: 1, B: 0 });
    assert.deepEqual(s.colors, ["ffd166", "ffffff"]);
    await page.mouse.move(B.x, B.y);
    s = await settle();
    assert.equal(s.events.hovered, "B");
    assert.deepEqual(s.events.log.out, { A: 1, B: 0 });
    assert.deepEqual(s.colors, ["ffffff", "ffd166"]);

    // Bubbling: A's click reaches the group. B stops propagation.
    await page.mouse.click(A.x, A.y);
    await page.mouse.click(B.x, B.y);
    s = await settle();
    assert.deepEqual(s.events.log.clicks, { A: 1, B: 1 });
    assert.equal(s.events.log.groupClicks, 1);

    // A click on the floor (no handlers) or on empty space reaches nobody.
    await page.mouse.click(floor.x, floor.y);
    await page.mouse.click(empty.x, empty.y);
    s = await settle();
    assert.deepEqual(s.events.log.clicks, { A: 1, B: 1 });
    assert.equal(s.events.log.groupClicks, 1);

    // Pointer capture: press on A, drag across B to empty space.
    await page.mouse.move(A.x, A.y);
    const before = (await settle()).rotationsY[0];
    const overBefore = (await settle()).events.log.over;
    await page.mouse.down();
    await page.mouse.move(B.x, B.y, { steps: 8 });
    await page.mouse.move(box.x + box.width - 20, A.y, { steps: 8 });
    s = await settle();
    assert.deepEqual(s.events.captured, ["A"]);
    assert.equal(s.events.hovered, "A", "hover stays on the capturing mesh");
    assert.deepEqual(s.events.log.over, overBefore, "B gets no pointerover during the capture");
    assert.ok(s.events.log.dragMoves.A >= 16, `A got every move: ${s.events.log.dragMoves.A}`);
    assert.equal(s.events.log.dragMoves.B, 0);
    assert.notEqual(s.rotationsY[0], before, "the drag spun A");
    await page.mouse.up();
    s = await settle();
    assert.deepEqual(s.events.captured, []);
    assert.deepEqual(s.events.log.clicks, { A: 1, B: 1 }, "a drag is not a click");

    // Down on A, up on B: no click on A or B, but their common parent gets one,
    // as a DOM click goes to the common ancestor.
    await page.mouse.move(A.x, A.y);
    await page.mouse.down();
    await page.mouse.move(B.x, B.y, { steps: 4 });
    await page.mouse.up();
    s = await settle();
    assert.deepEqual(s.events.log.clicks, { A: 1, B: 1 });
    assert.equal(s.events.log.groupClicks, 2);

    // Unmount while hovered: no pointerout, the node is dropped, and the
    // component's onCleanup clears the hover signal.
    await page.mouse.move(A.x, A.y);
    s = await settle();
    assert.equal(s.events.hovered, "A");
    const outBefore = s.events.log.out.A;
    s = await run("toggle");
    assert.equal(s.events.hovered, null);
    assert.deepEqual(s.events.log.out.A, outBefore);
    assert.deepEqual(s.events.captured, []);
    assert.ok(s.events.stats.dropped > 0);
    await page.mouse.move(empty.x, empty.y);
    s = await settle();
    assert.deepEqual(s.events.log.out.A, outBefore, "nothing fires on a disposed mesh");

    // Unmount while captured: the capture is dropped and later moves go nowhere.
    await run("toggle");
    await page.mouse.move(A.x, A.y);
    await page.mouse.down();
    s = await settle();
    assert.deepEqual(s.events.captured, ["A"]);
    const movesBefore = s.events.log.dragMoves.A;
    s = await run("toggle");
    assert.deepEqual(s.events.captured, []);
    await page.mouse.move(empty.x, empty.y, { steps: 4 });
    await page.mouse.up();
    s = await settle();
    assert.equal(s.events.log.dragMoves.A, movesBefore);

    // Remount: the new meshes respond.
    await run("toggle");
    await page.mouse.move(A.x, A.y);
    s = await settle();
    assert.equal(s.events.hovered, "A");

    console.log("event stats", s.events.stats);
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
