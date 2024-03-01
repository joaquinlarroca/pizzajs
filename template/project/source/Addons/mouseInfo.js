import * as pjs from "../modules/index.js"
let bar = new pjs.rect([0, 0], [pjs.canvas.width, pjs.canvas.height], "rgba(0,0,0,0.5)")
let text = 0
let interval = setInterval(() => {
    if (bar.height != pjs.canvas.height / 32) {
        bar.width = pjs.canvas.width
        bar.height = pjs.canvas.height / 32
        text = bar.height
        bar.y = pjs.canvas.height - bar.height
        clearInterval(interval);
    }
}, 100)

window.addEventListener("pjsAfterUpdate", () => {
    bar.color = "rgba(0,0,0,0.5)"
    bar.draw()
    pjs.ctx.fillStyle = "#FFFFFF"
    var temp = typeof pjs.mouse.objectSelected == "object"
    var tempClass = ""
    if(pjs.mouse.objectSelected instanceof pjs.actor){
        tempClass = "Actor"
    }
    else if(pjs.mouse.objectSelected instanceof pjs.slider){
        tempClass = "Slider"
    }
    else{
        tempClass = "None"
    }
    bar.width = pjs.measureTextWidth(pjs.mouse.pos + " " + temp + "," + tempClass + " " + pjs.mouse.click,text-1,"sans-serif")
    bar.x = pjs.canvas.width/2 - bar.width/2
    pjs.drawtext(pjs.mouse.pos + " " + temp + "," + tempClass + " " + pjs.mouse.click, [pjs.canvas.width / 2, pjs.canvas.height ], text - 1,"sans-serif", "bottom", "center")
})