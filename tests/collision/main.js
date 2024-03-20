import { start, setup, actor, rect, hitbox2, hitboxCircle, clear, keyPressed, time, mouse } from "/source/modules/index.js"
import "/source/Addons/mouseInfo.js"
setup(500, 500, 0.9);

let a = new actor(undefined, [100, 64], [48, 48], [0, 0])

let b = new actor("color:#FF0000", [234, 64], [32, 32], [0, 0])

let c = new rect([0, 0], [64, 64], "#FFFFFF")
c.hitbox = new hitbox2(0, 0, 64, 64)

let d = new rect([436, 0], [64, 64], "blue")
d.hitbox = new hitbox2(436, 0, 64, 64)

let e = new actor(undefined, [333, 44], [48, 48], [0, 0])
e.radius = 48
e.hitbox = new hitboxCircle(0, 0, 24)
e.conditions.isDraggable = true

let f = new actor(undefined, [200, 340], [48, 48], [0, 0])
f.radius = 48
f.hitbox = new hitboxCircle(0, 0, 24)
f.conditions.isDraggable = true

a.conditions.isDraggable = true
window.addEventListener("pjsUpdate", () => {
    clear()
    a.draw()

    b.draw()

    c.draw()

    d.draw()

    e.draw()
    f.draw()
    if (keyPressed("e")) {
        a.hitbox.draw()
        b.hitbox.draw()
        c.hitbox.draw()
        d.hitbox.draw()
        e.hitbox.draw()
        f.hitbox.draw()
    }

    if (keyPressed("d") && c.width < 436) {
        c.width += 200 * time.delta
    }
    if (keyPressed("a") && c.width > 64) {
        c.width -= 200 * time.delta
    }

    if (keyPressed("s") && b.y < 128) {
        b.y += 150 * time.delta
    }
    if (keyPressed("w") && b.y > 0) {
        b.y -= 150 * time.delta
    }
    e.hitbox.x = e.pos[0]
    e.hitbox.y = e.pos[1]
    f.hitbox.x = f.pos[0]
    f.hitbox.y = f.pos[1]

    if (e.hitbox.collideCircle(f.hitbox)) {
        e.color = "#FF00FF"
    }
    else if (e.hitbox.collide(a.hitbox)) {
        e.color = "#00FFFF"
    }
    else {
        e.color = "#FFFFFF"
    }

    if (f.hitbox.collide2(d.hitbox)) {
        f.color = "#FFF000"
    }
    else if (f.hitbox.collideCircle(e.hitbox)) {
        f.color = "#FF00FF"
    }
    else if (f.hitbox.collidepoint(mouse.pos)) {
        f.color = "#000EEE"
    }
    else {
        f.color = "#FFFFFF"
    }

    c.hitbox.width = c.width
    if (c.hitbox.collide2(d.hitbox)) {
        c.color = "blue"
    }
    else if (c.hitbox.collide(a.hitbox)) {
        c.color = "rgba(255,255,0,0.75"
    }
    else {
        c.color = "#FFF"
    }

    if (a.hitbox.collide(b.hitbox)) {
        a.changeImage("color:green")
    }
    else if (a.hitbox.collide2(c.hitbox)) {
        a.changeImage("color:green")
    }
    else if (a.color != "#FFFFFF") {
        a.changeImage("color: #FFFFFF")
    }


    if (b.hitbox.collide(a.hitbox)) {
        b.changeImage("color:green")
    }
    else if (b.hitbox.collide2(c.hitbox)) {
        b.changeImage("color:green")
    }
    else {
        b.changeImage("color:red")
    }
})

start()