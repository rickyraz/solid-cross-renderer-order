import { mountAsync } from "./async-scene.jsx";
import { mountEvents } from "./events-scene.jsx";
import { mountFrame } from "./frame-scene.jsx";
import { mountMain } from "./main-scene.jsx";

// Each scene has its own canvas and WebGLRenderer. Start them one by one, so
// a failure in one (no WebGL, a bug) leaves the others running and says why.
// With ?embed=<name> (set on <html> by index.html), only that scene starts, so
// a page that embeds several examples does not hold every WebGL context in each.
const embed = document.documentElement.dataset.embed;
for (const [name, mount, statusId] of [["main", mountMain, "main-status"], ["events", mountEvents, "event-status"], ["async", mountAsync, "async-status"], ["frame", mountFrame, "frame-status"]]) {
  if (embed && embed !== name) continue;
  try {
    mount();
  } catch (error) {
    console.error(error);
    const status = document.getElementById(statusId);
    status.dataset.error = "true";
    status.textContent = `This example could not start: ${error.message}. It needs JavaScript and WebGL.`;
  }
}
