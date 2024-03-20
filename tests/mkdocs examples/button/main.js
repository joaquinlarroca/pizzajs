import { start, setup, clear, canvas, button, ctx, drawtext } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 1);

let size = 256
let x = canvas.width / 2 - size
let y = canvas.height / 2 - size / 2

let MyButton = new button("color: #5a5a5a", [x, y], [size * 2, size], "My Button", "sans-serif", "#FFFFFF", size * 0.5, 500)

window.addEventListener("pjsUpdate", () => {
    clear()
    MyButton.draw()
    // If MyButton is hovered it will change color
    //if (MyButton.hover) {
    //    MyButton.color = "#FF0000"
    //}
    //else {
    //    MyButton.color = "#5a5a5a"
    //}
    
    // If MyButton is clicked it will change its text
    if (MyButton.click) {
        if (MyButton.text.text == "My Button") {
            MyButton.setText("Super Button", "sans-serif")
        }
        else {
            MyButton.setText("My Button", "sans-serif")
        }
    }

    // If MyButton is clicked it will say Timeout and when its ready to click again is gonna say Can Click
    //if(!MyButton.timeout.active){
    //    ctx.fillStyle = "#00FF00"
    //    drawtext("Can Click",[0,0],size*0.3)
    //}
    //else{
    //    ctx.fillStyle = "#FF0000"
    //    drawtext("Timeout",[0,0],size*0.3)
    //}
})

start()