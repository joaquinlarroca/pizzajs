import * as pjs from "/source/modules/index.js"
pjs.setup(500, 500, 0.9);
pjs.loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

let a = new pjs.actor(undefined, [200, 114], [32, 32], [0, 0])
let b = new pjs.actor(undefined, [32, 114], [50, 50], [0, 0])

let c = new pjs.button("color: rgba(0,0,0,0.5)", [26, 32], [128, 50], "Click", "#FFFFFF", 25, 500)

let d = new pjs.slider("color: rgba(0,0,0,0.5)", "color: rgb(122.5,122.5,122.5)", [186, 32], [128, 50], 15, [0, 100], "#FFFFFF", 50)

let e = new pjs.button("color: rgba(0,0,0,0.5)", [346, 32], [128, 50], "0", "#FFFFFF", 25, 500)

c.stroke.active = true
c.stroke.width = 2

d.stroke.active = true
d.stroke.width = 2

e.stroke.active = true
e.stroke.width = 2

a.stroke.active = true
a.stroke.color = "#FF00FF"
a.stroke.width = 2

a.radius = [25, 5, 5, 25]
c.radius = [25, 5, 5, 25]
d.radius = 5
e.radius = [5, 25, 25, 5]

a.conditions.isDraggable = true
b.conditions.isDraggable = true


window.addEventListener("pjsUpdate", (info) => {
    const { deltaTime, fps } = info.detail
    pjs.clear()
    a.draw()
    b.draw()
    c.draw()
    d.draw()
    e.draw()
    a.angle += d.percentage * deltaTime * 2
    e.change("   " + d.percentage + "   ", "sans-serif")

    if (c.canClickDueTimeout) {
        if (c.text.text != "CLICK") {
            c.text.color = "#FFFFFF"
            c.stroke.color = "#FFFFFF"
        }
    }
    else {
        c.text.color = "#FF0000"
        c.stroke.color = "#FF0000"
    }
    if (c.click) {
        if (a.color == "white") {
            a.changeImage("/source/icons/PizzaJS256x.png")
        }
        else {
            a.changeImage("color:white")
        }
    }
    pjs.ctx.fillStyle = "white"
    pjs.drawtext("FPS: " + fps, [8, 8], 16)
})
pjs.start()