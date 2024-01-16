import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080, 1);

let size = 48
let x = pjs.canvas.width / 2 
let y = pjs.canvas.height / 2

let MyTimeout = new pjs.timeout(1500)

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    if(pjs.mouse.click && !MyTimeout.active){
        MyTimeout.start()
    }
    if(MyTimeout.active){
        pjs.ctx.fillStyle = "#FF0000"
    }
    else{
        pjs.ctx.fillStyle = "#00FF00"
    }
    pjs.drawtext(MyTimeout.active,[x,y],size,"sans-serif","middle","center")
})

pjs.start()