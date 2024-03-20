import { start, setup, clear, canvas, actor } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 0.9);

let size = 128
let x = canvas.width / 2 - size/2
let y = canvas.height / 2 - size/2

let actor1 = new actor("color:#FF0000", [x, y], [size, size], [0, 0])

window.addEventListener("pjsUpdate", () => {
    clear()
    actor1.draw()
})

start()