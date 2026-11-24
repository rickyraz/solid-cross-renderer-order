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
    // The status only reaches this text if the scene redrew after the timer
    // resolved the loads. (No wait for "loading" first: on a busy machine the
    // loads can finish before the page is checked.)
    await status.filter({ hasText: "left red · middle red · right gray" }).waitFor({ timeout: 10000 });
    assert.match(await status.textContent(), /GPU textures 2/);
    for (const id of ["main-status", "event-status", "frame-status"]) {
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
    for (const id of ["main-status", "event-status", "async-status", "frame-status"]) {
      const output = page.locator("#" + id);
      await output.filter({ hasText: "could not start" }).waitFor({ timeout: 5000 });
      assert.equal(await output.getAttribute("data-error"), "true", id);
    }
  } finally {
    await browser.close();
  }
});

// ?embed=<name> shows and starts one example, for iframes on other pages.
test("page: embed mode starts only the named example", async () => {
  const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(url + "?embed=events");
    await page.locator("#event-status").filter({ hasText: /\S/ }).waitFor({ timeout: 5000 });
    assert.equal(await page.locator("#events-canvas").isVisible(), true);
    for (const id of ["main-canvas", "async-canvas", "frame-canvas"]) {
      assert.equal(await page.locator("#" + id).isVisible(), false, id);
    }
    assert.equal(await page.locator("h1").isVisible(), false);
    for (const id of ["main-status", "async-status", "frame-status"]) {
      assert.equal(await page.locator("#" + id).textContent(), "", id);
    }
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
