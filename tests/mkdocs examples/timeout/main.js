import { start, setup, clear, timeout, canvas, drawtext, ctx, mouse } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 1);

let size = 48
let x = canvas.width / 2
let y = canvas.height / 2

let MyTimeout = new timeout(1500)

window.addEventListener("pjsUpdate", () => {
    clear()
    if (mouse.click && !MyTimeout.active) {
        MyTimeout.start()
    }
    if (MyTimeout.active) {
        ctx.fillStyle = "#FF0000"
    }
    else {
        ctx.fillStyle = "#00FF00"
    }
    drawtext(MyTimeout.active, [x, y], size, "sans-serif", "middle", "center")
    drawtext(Math.round(MyTimeout.timeLeft / 100) / 10, [x, y + size], size, "sans-serif", "middle", "center")
})

start()