import * as pjs from "/source/modules/index.js"
let bg = new pjs.rect([0, 0], [pjs.canvas.width, pjs.canvas.height], "#1a1a1a")

let interval = setInterval(() => {
    if (bg.width != pjs.canvas.width || bg.height != pjs.canvas.height) {
        bg.width = pjs.canvas.width
        bg.height = pjs.canvas.height
        clearInterval(interval);
    }
}, 100)
window.addEventListener("pjsAfterClear", () => {
    bg.draw()
})
