import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080, 1);

let size = 256
let x = pjs.canvas.width / 2 - size
let y = pjs.canvas.height / 2 - size / 2

let MyButton = new pjs.button("color: #000000", [x, y], [size * 2, size], "My Button", "#FFFFFF", size * 0.5, 500)

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    MyButton.draw()
    //if (MyButton.hover) {
    //    MyButton.color = "#FF0000"
    //}
    //else {
    //    MyButton.color = "#000000"
    //}
    if (MyButton.click) {
        if (MyButton.text.text == "My Button") {
            MyButton.change("Super Button", "sans-serif")
        }
        else {
            MyButton.change("My Button", "sans-serif")
        }
    }
    
    //if(MyButton.canClickDueTimeout){
    //    pjs.ctx.fillStyle = "#00FF00"
    //    pjs.drawtext("Can Click",[0,0],size*0.45)
    //}
    //else{
    //    pjs.ctx.fillStyle = "#FF0000"
    //    pjs.drawtext("Timeout",[0,0],size*0.45)
    //}
})

pjs.start()