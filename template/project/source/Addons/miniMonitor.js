import * as pjs from "../modules/index.js"
let bar = new pjs.rect([0, 0], [pjs.canvas.width, pjs.canvas.height], "rgba(8, 8, 173, .75)")
let text = 0
let interval = setInterval(() => {
    if (bar.width != pjs.canvas.width || bar.height != pjs.canvas.height / 32) {
        bar.width = pjs.canvas.width
        bar.height = pjs.canvas.height / 32
        text = bar.height
        clearInterval(interval);
    }
}, 100)
window.addEventListener("pjsAfterUpdate", () => {
    if (pjs.keyPressed("k")) {
        bar.color = "rgba(8, 8, 173, .75)"
        bar.draw()
        pjs.ctx.fillStyle = "#FFFFFF"
        pjs.drawtext("FPS: " + Math.round(1 / pjs.global.deltaTime), [0, 0], text)
        pjs.drawtext("DT: " + Math.round(pjs.global.deltaTime * 10000) / 10000, [text + pjs.measureTextWidth("FPS: " + Math.round(1 / pjs.global.deltaTime), text, "sans-serif"), 0], text)
    }
})