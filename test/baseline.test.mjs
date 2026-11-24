import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

// One renderer only (DOM). Three ways to put a row's label in a shared container.
// Only the container that Solid renders with its own keyed list follows the rows.
test("baseline: shared container order with a single renderer", async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(new URL("../experiments/baseline/index.html", import.meta.url).href);
    const swap = page.locator("#swap");
    await swap.waitFor();
    assert.equal(await swap.isEnabled(), true, errors.join("\n"));

    const read = async id => ({
      host: await page.locator("#" + id + " .host > li").evaluateAll(items => items.map(item => item.dataset.id)),
      labels: await page.locator("#" + id + " .overlay label").evaluateAll(items => items.map(item => item.dataset.id)),
      match: await page.locator("#" + id + " output").getAttribute("data-match")
    });
    const ab = ["A", "B"], ba = ["B", "A"];

    for (const id of ["append", "portal", "managed"]) {
      assert.deepEqual(await read(id), { host: ab, labels: ab, match: "true" }, id + " initial");
    }
    await swap.click();
    assert.deepEqual(await read("append"), { host: ba, labels: ab, match: "false" }, "append after swap");
    assert.deepEqual(await read("portal"), { host: ba, labels: ab, match: "false" }, "portal after swap");
    assert.deepEqual(await read("managed"), { host: ba, labels: ba, match: "true" }, "managed after swap");
    await swap.click();
    for (const id of ["append", "portal", "managed"]) {
      assert.deepEqual(await read(id), { host: ab, labels: ab, match: "true" }, id + " swapped back");
    }
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
