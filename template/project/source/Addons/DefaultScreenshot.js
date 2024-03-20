import { rect, canvas } from "../modules/index.js"
let bg = new rect([0, 0], [canvas.width, canvas.height], "#1a1a1a")

let interval = setInterval(() => {
    if (bg.width != canvas.width || bg.height != canvas.height) {
        bg.width = canvas.width
        bg.height = canvas.height
        clearInterval(interval);
    }
}, 100)
window.addEventListener("pjsAfterClear", () => {
    bg.color = canvas.style.backgroundColor
    bg.draw()
})
