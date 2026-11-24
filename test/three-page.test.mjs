import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

const url = new URL("../experiments/three/index.html", import.meta.url).href;

// The page as a visitor opens it: no ?manual, so loads resolve on a timer and
// the async canvas must repaint by itself.
test("page: automatic loads reach the screen", async () => {
  const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(url);
    const status = page.locator("#async-status");
    await status.filter({ hasText: "left loading" }).waitFor();
    // Text only changes if the scene redrew after the timer resolved the loads.
    await status.filter({ hasText: "left red · middle red · right gray" }).waitFor({ timeout: 5000 });
    assert.match(await status.textContent(), /GPU textures 2/);
    for (const id of ["main-status", "event-status"]) {
      assert.notEqual(await page.locator("#" + id).textContent(), "", id);
    }
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});

// Without WebGL, each example says so instead of leaving a blank canvas.
test("page: each example reports when it cannot start", async () => {
  const browser = await chromium.launch({ args: ["--disable-webgl", "--disable-3d-apis"] });
  try {
    const page = await browser.newPage();
    await page.goto(url);
    for (const id of ["main-status", "event-status", "async-status"]) {
      const output = page.locator("#" + id);
      await output.filter({ hasText: "could not start" }).waitFor({ timeout: 5000 });
      assert.equal(await output.getAttribute("data-error"), "true", id);
    }
  } finally {
    await browser.close();
  }
});
