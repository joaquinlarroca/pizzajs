import { keyPressed, rect, canvas, time, drawtext, measureTextWidth, ctx } from "../modules/index.js"

let bar = new rect([0, 0], [canvas.width, canvas.height], "rgba(8, 8, 173, .75)")
let text = 0
let interval = setInterval(() => {
    if (bar.width != canvas.width || bar.height != canvas.height / 32) {
        bar.width = canvas.width
        bar.height = canvas.height / 32
        text = bar.height
        clearInterval(interval);
    }
}, 100)
window.addEventListener("pjsAfterUpdate", () => {
    if (keyPressed("k")) {
        bar.color = "rgba(8, 8, 173, .75)"
        bar.draw()
        ctx.fillStyle = "#FFFFFF"
        drawtext("FPS: " + Math.round(1 / time.delta), [0, 0], text)
        drawtext("DT: " + Math.round(time.delta * 10000) / 10000, [text + measureTextWidth("FPS: " + Math.round(1 / time.delta), text, "sans-serif"), 0], text)
    }
})