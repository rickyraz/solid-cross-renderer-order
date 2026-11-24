import { mountAsync } from "./async-scene.jsx";
import { mountEvents } from "./events-scene.jsx";
import { mountFrame } from "./frame-scene.jsx";
import { mountMain } from "./main-scene.jsx";

// Each scene has its own canvas and WebGLRenderer. Start them one by one, so
// a failure in one (no WebGL, a bug) leaves the others running and says why.
for (const [mount, statusId] of [[mountMain, "main-status"], [mountEvents, "event-status"], [mountAsync, "async-status"], [mountFrame, "frame-status"]]) {
  try {
    mount();
  } catch (error) {
    console.error(error);
    const status = document.getElementById(statusId);
    status.dataset.error = "true";
    status.textContent = `This example could not start: ${error.message}. It needs JavaScript and WebGL.`;
  }
}
