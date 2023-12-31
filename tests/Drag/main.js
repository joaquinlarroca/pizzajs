import * as pjs from "/source/modules/index.js"
pjs.setup(500, 500, 0.9);
pjs.loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

let a = new pjs.actor(undefined, [200, 114], [32, 32], [32, 0])
let b = new pjs.actor(undefined, [32, 114], [50, 50], [0, 0])
let c = new pjs.button("color:#000", [32, 32], [128, 50], "Change color", "#FFFFFF", 25, 500)
let d = new pjs.slider("color:rgba(75,75,75,.5)", "color:#FFF", [200, 32], [200, 25], 12.5, [-180, 180], "rgb(0,0,0)", 0)

a.conditions.isDraggable = true
b.conditions.isDraggable = true


window.addEventListener("pjsUpdate", () => {

    pjs.clear()
    
    a.draw()
    b.draw()
    a.drawAnchorPoint()
    c.draw()
    d.draw()
    

    pjs.ctx.fillStyle = "#FFF"
    pjs.drawtext(d.percentagea, [412, 44.5], 25)

    if (c.canClickDueTimeout) {
        if (c.text.text != "CLICK") {
            c.change("CLICK", "sans-serif")
            c.text.margin = 25
        }
    }
    else {
        c.change("     :)     ", "sans-serif")
        c.text.margin = 200
    }

    if (c.click) {
        if (a.color == "white") {
            a.changeImage("color:red")
            a.changeImage("/source/icons/PizzaJS256x.png")
        }
        else {
            a.changeImage("color:white")
        }
    }
    pjs.ctx.fillStyle = "white"
})
setInterval(() => {
    d.percentagea = d.percentage
}, 75)
pjs.start()