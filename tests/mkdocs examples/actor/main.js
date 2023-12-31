import * as pjs from "/source/modules/index.js"


pjs.setup(1920, 1080, 1);

let size = 256
let x = pjs.canvas.width / 2 - size/2
let y = pjs.canvas.height / 2 - size/2

let actor = new pjs.actor("/source/icons/PizzaJS256x.png", [x, y], [size, size], [0, 0])

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    actor.draw()
})

pjs.start()