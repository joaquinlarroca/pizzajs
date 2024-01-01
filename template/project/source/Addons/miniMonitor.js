import * as pjs from "../modules/index.js"
let bar = new pjs.rect([0, 0], [pjs.canvas.width, pjs.canvas.height], "#0808ad")
let text = 0
let interval = setInterval(() => {
    if (bar.width != pjs.canvas.width || bar.height != pjs.canvas.height / 25) {
        bar.width = pjs.canvas.width
        bar.height = pjs.canvas.height / 25
        text = pjs.canvas.height / 25
        clearInterval(interval);
    }
}, 100)
window.addEventListener("pjsAfterClear", () => {
    bar.draw()
    pjs.ctx.fillStyle = "#FFFFFF"
    pjs.drawtext("FPS: " + Math.round(1 / pjs.global.deltaTime), [0, 0], text)
    pjs.drawtext("DeltaTime: " +Math.round(pjs.global.deltaTime*10000)/10000, [text + pjs.measureTextWidth("FPS: " + Math.round(1 / pjs.global.deltaTime), text, "sans-serif"), 0],text)
})