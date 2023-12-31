import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080, 0.9);

let size = 128
let x = pjs.canvas.width / 2 - size/2
let y = pjs.canvas.height / 2 - size/2

let actor = new pjs.actor("color:#FF0000", [x, y], [size, size], [0, 0])

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    actor.draw()
})

pjs.start()