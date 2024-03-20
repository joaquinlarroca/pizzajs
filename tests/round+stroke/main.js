import { start, setup, clear, button, slider, actor } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"
setup(500, 500, 1);

let actora = new actor(undefined, [32, 114], [50, 50], [0, 0])

let buttona = new button("color: #000000", [26, 32], [128, 50], "Click", "sans-serif", "#FFFFFF", 25, 500)

let slidera = new slider("color: #000000", "color: rgb(122.5,122.5,122.5)", [186, 32], [128, 50], 40, [0, 100], "#FFFFFF", 50)

actora.stroke.active = true
actora.stroke.color = "#FF00FF"
actora.stroke.width = 2
actora.radius = [25, 5, 5, 25]

buttona.stroke.active = true
buttona.stroke.width = 2
buttona.radius = 5

slidera.stroke.active = true
slidera.stroke.width = 2
slidera.radius = 5

slidera.thumb.stroke.active = true
slidera.thumb.stroke.width = 10
slidera.thumb.stroke.color = "#000000"
slidera.thumb.radius = 25
slidera.thumb.height = 40

window.addEventListener("pjsUpdate", () => {
    clear()
    actora.draw()
    buttona.draw()
    slidera.draw()
})
start()