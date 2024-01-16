import * as pjs from "/source/modules/index.js"
pjs.setup(500, 500, 0.9);
pjs.loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

let a = new pjs.actor("color: #000000", [200, 114], [32, 32], [0, 0])
let b = new pjs.actor(undefined, [32, 114], [50, 50], [0, 0])

let c = new pjs.button("color: rgba(0,0,0,0.5)", [26, 32], [128, 50], "Click", "#FFFFFF", 25, 1000)

let d = new pjs.slider("color: rgba(0,0,0,0.5)", "color: rgb(122.5,122.5,122.5)", [186, 32], [128, 50], 15, [-75, 75], "#FFFFFF", 0)

let e = new pjs.button("color: rgba(0,0,0,0.5)", [346, 32], [128, 50], "0", "#FFFFFF", 25, 10)

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
    if (pjs.keyPressed("space")) {
        a.move(100 * deltaTime)
        pjs.shakeScreen(2, 20)
    }

    e.change("   " + d.percentage + "   ", "FiraCode")

    if (!c.timeout.active) {
        c.text.color = "#FFFFFF"
        c.stroke.color = "#FFFFFF"
        c.change("Click", "FiraCode")
    }
    else {
        c.text.color = "#FF0000"
        c.stroke.color = "#FF0000"
        c.change(Math.round(c.timeout.timeElapsed / 10) / 100, "FiraCode")
    }
    if (c.click) {
        if (a.color == "#FFFFFF") {
            a.changeImage("color:#000000")
        }
        else {
            a.changeImage("color:#FFFFFF")
        }
    }
    pjs.ctx.fillStyle = "white"
    pjs.drawtext("FPS: " + fps, [8, 8], 16, "FiraCode")
    pjs.ctx.fillStyle = "#0FFFF0"
    pjs.drawtext("Use space to move", [pjs.canvas.width - 8, 8], 16, "FiraCode", "top", "right")
})
pjs.start()