import { start, setup, clear, slider, canvas, drawtext, ctx } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 1);

let size = 256
let x = canvas.width / 2 - size
let y = canvas.height / 2 - size / 4

let MySlider = new slider("color:#3a3a3a", "color:#FFFFFF", [x, y], [size * 2, size / 2], size / 4, [0, 100], "#ff0000", 50)

window.addEventListener("pjsUpdate", () => {
    clear()
    MySlider.draw()
    ctx.fillStyle = "#FFFFFF"
    drawtext(MySlider.percentage, [size / 8, size / 8], size / 4)
})

start()