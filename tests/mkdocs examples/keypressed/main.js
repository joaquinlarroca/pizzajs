import { start, setup, clear, ctx, keyPressed, canvas, drawtext } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 1);

let size = 48
let x = canvas.width / 2
let y = canvas.height / 2

window.addEventListener("pjsUpdate", () => {
    clear()
    if (keyPressed("w")) {
        ctx.fillStyle = "#55FF55"
        drawtext("W pressed", [x, y], size, "sans-serif", "middle", "center")
    }
    else {
        ctx.fillStyle = "#FF5555"
        drawtext("W not pressed", [x, y], size, "sans-serif", "middle", "center")
    }
})

start()
