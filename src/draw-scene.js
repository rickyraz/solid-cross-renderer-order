// The canvas draws a snapshot of the scene slots in sibling order.
export function drawScene(canvas, ids) {
  const ctx = canvas.getContext("2d");
  const style = getComputedStyle(canvas);
  const token = name => style.getPropertyValue(name).trim();
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);

  function drawPath(points, color, thickness = 2, fill) {
    ctx.beginPath();
    for (const [i, [x, y]] of points.entries()) {
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    if (fill) {
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    }
    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;
    ctx.lineJoin = "round";
    ctx.stroke();
  }

  const grid = token("--grid");
  for (let x = -width; x <= width * 2; x += 75) {
    drawPath([[x, 97], [x + 330, height]], grid, 1.5);
    drawPath([[x, 97], [x - 330, height]], grid, 1.5);
  }

  ids.forEach((id, index) => {
    const x = width * (index + 0.5) / ids.length;
    ctx.save();
    ctx.translate(x, 110);
    if (id === "A") {
      const ink = token("--a");
      drawPath([[-64, -22], [0, -54], [64, -22], [0, 11], [-64, -22]], ink, 3, token("--a-top"));
      drawPath([[-64, -22], [0, 11], [0, 77], [-64, 43], [-64, -22]], ink, 3, token("--a-left"));
      drawPath([[0, 11], [64, -22], [64, 43], [0, 77], [0, 11]], ink, 3, token("--a-right"));
    } else {
      const ink = token("--b");
      drawPath([[0, -65], [73, 10], [0, 76], [-73, 10], [0, -65]], ink, 3, token("--b-face"));
      drawPath([[0, -65], [-14, 31], [0, 76]], ink, 3);
      drawPath([[-73, 10], [-14, 31], [73, 10]], ink, 3);
    }
    ctx.fillStyle = token("--ink");
    ctx.font = "bold 28px " + token("--mono");
    ctx.textAlign = "center";
    ctx.fillText(id, 0, 115);
    ctx.restore();
  });
}
