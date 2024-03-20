import { start, setup, clear, canvas, rect } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 1);

let size = 256
let x = canvas.width / 2 - size / 2
let y = canvas.height / 2 - size / 2

let Myrect = new rect([x, y], [size, size], "#FF00FF")

window.addEventListener("pjsUpdate", () => {
    clear()
    Myrect.draw()
})

start()