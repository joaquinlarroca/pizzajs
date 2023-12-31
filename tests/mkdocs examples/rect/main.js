import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080, 1);

let size = 256
let x = pjs.canvas.width / 2 - size/2
let y = pjs.canvas.height / 2 - size/2

let Myrect = new pjs.rect( [x, y], [size, size], "#FF00FF")

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    Myrect.draw()
})

pjs.start()