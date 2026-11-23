import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

test("both bridges preserve label identity when the scene slots swap and swap back", async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(new URL("../index.html", import.meta.url).href);
    assert.equal(await page.locator("html").getAttribute("lang"), "en");
    const swap = page.getByRole("button", { name: "Swap A and B" });
    await swap.waitFor();
    assert.equal(await swap.isEnabled(), true, errors.join("\n"));
    const initialLabels = await page.locator(".overlay label").elementHandles();
    assert.equal(initialLabels.length, 4);

    async function checkOrder(slotIds, mountOnlyIds, synchronizedIds) {
      for (const [id, expected] of [["mount-only", mountOnlyIds], ["sync-label-order", synchronizedIds]]) {
        const panel = page.locator("#" + id);
        assert.equal(await panel.locator("canvas").getAttribute("aria-label"),
          "Scene slot order: " + slotIds.join(", "));
        const actual = await panel.locator(".overlay label").evaluateAll(
          labels => labels.map(label => label.dataset.id));
        assert.deepEqual(actual, expected);
        assert.equal(await panel.locator("output").textContent(),
          slotIds.join() === expected.join() ? "Orders match" : "Orders differ");
      }
    }
    async function checkIdentity() {
      for (const [i, label] of initialLabels.entries()) {
        const panel = i < 2 ? "#mount-only" : "#sync-label-order";
        assert.equal(await label.evaluate((node, selector) =>
          node === document.querySelector(selector + ' label[data-id="' + node.dataset.id + '"]'),
          panel), true);
      }
    }
    const ab = ["A", "B"], ba = ["B", "A"];
    await checkOrder(ab, ab, ab);
    await swap.click();
    await checkOrder(ba, ab, ba);
    await checkIdentity();
    await swap.focus();
    await page.keyboard.press("Enter");
    await checkOrder(ab, ab, ab);
    await checkIdentity();
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
