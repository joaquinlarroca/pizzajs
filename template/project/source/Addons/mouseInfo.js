import { actor, rect, canvas, slider, drawtext, mouse, measureTextWidth, ctx } from "../modules/index.js"
let bar = new rect([0, 0], [canvas.width, canvas.height], "rgba(0,0,0,0.5)")
let text = 0
let interval = setInterval(() => {
    if (bar.height != canvas.height / 32) {
        bar.width = canvas.width
        bar.height = canvas.height / 32
        text = bar.height
        bar.y = canvas.height - bar.height
        clearInterval(interval);
    }
}, 100)

window.addEventListener("pjsAfterUpdate", () => {
    bar.color = "rgba(0,0,0,0.5)"
    bar.draw()
    ctx.fillStyle = "#FFFFFF"
    var temp = typeof mouse.objectSelected == "object"
    var tempClass = ""
    if (mouse.objectSelected instanceof actor) {
        tempClass = "Actor"
    }
    else if (mouse.objectSelected instanceof slider) {
        tempClass = "Slider"
    }
    else {
        tempClass = "None"
    }
    bar.width = measureTextWidth(mouse.pos + " " + temp + "," + tempClass + " " + mouse.click, text - 1, "sans-serif")
    bar.x = canvas.width / 2 - bar.width / 2
    drawtext(mouse.pos + " " + temp + "," + tempClass + " " + mouse.click, [canvas.width / 2, canvas.height], text - 1, "sans-serif", "bottom", "center")
})