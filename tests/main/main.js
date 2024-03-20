import { global, start, setup, ctx, canvas, clear, shakeScreen, time, drawtext, loadFont, button, slider, actor, keyPressed } from "/source/modules/index.js"
import "/source/Addons/mouseInfo.js"
setup(500, 500, 0.9);
loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

let a = new actor("color: #000000", [200, 114], [32, 32], [0, 0])
let b = new actor(undefined, [32, 114], [50, 50], [0, 0])

let c = new button("color: rgba(0,0,0,0.5)", [26, 32], [128, 50], "Click", "FiraCode", "#FFFFFF", 25, 1000)

let d = new slider("color: rgba(0,0,0,0.5)", "color: rgb(122.5,122.5,122.5)", [186, 32], [128, 50], 15, [-75, 75], "#FFFFFF", 0)

let e = new button("color: rgba(0,0,0,0.5)", [346, 32], [128, 50], "0", "FiraCode", "#FFFFFF", 25, 10)

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


window.addEventListener("pjsUpdate", () => {
    clear()
    a.draw()
    b.draw()
    c.draw()
    d.draw()
    e.draw()
    a.angle += d.percentage * time.delta * 2
    if (keyPressed("space")) {
        a.move(100 * time.delta)
        shakeScreen(2, 20)
    }

    e.setText("   " + d.percentage + "   ", "FiraCode")

    if (!c.timeout.active) {
        c.text.color = "#FFFFFF"
        c.stroke.color = "#FFFFFF"
        c.setText("Click", "FiraCode")
    }
    else {
        c.text.color = "#FF0000"
        c.stroke.color = "#FF0000"
        c.setText(Math.round(c.timeout.timeLeft / 10) / 100, "FiraCode")
    }
    if (c.click) {
        if (a.color == "#FFFFFF") {
            a.changeImage("color:#000000")
        }
        else {
            a.changeImage("color:#FFFFFF")
        }
    }
    ctx.fillStyle = "white"
    drawtext("FPS: " + global.fps, [8, 8], 16, "FiraCode")
    ctx.fillStyle = "#0FFFF0"
    drawtext("Use space to move", [canvas.width - 8, 8], 16, "FiraCode", "top", "right")
})
start()