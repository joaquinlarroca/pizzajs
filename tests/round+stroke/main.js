import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"
pjs.setup(1920, 1080, 1);

let actor = new pjs.actor(undefined, [32, 114], [50, 50], [0, 0])

let button = new pjs.button("color: #000000", [26, 32], [128, 50], "Click", "#FFFFFF", 25, 500)

let slider = new pjs.slider("color: #000000", "color: rgb(122.5,122.5,122.5)", [186, 32], [128, 50], 40, [0, 100], "#FFFFFF", 50)

actor.stroke.active = true
actor.stroke.color = "#FF00FF"
actor.stroke.width = 2
actor.radius = [25, 5, 5, 25]

button.stroke.active = true
button.stroke.width = 2
button.radius = 5

slider.stroke.active = true
slider.stroke.width = 2
slider.radius = 5

slider.thumb.stroke.active = true
slider.thumb.stroke.width = 10
slider.thumb.stroke.color = "#000000"
slider.thumb.radius = 25
slider.thumb.height = 40

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    actor.draw()
    button.draw()
    slider.draw()
})
pjs.start()