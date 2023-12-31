import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080, 1);

let size = 48
let x = pjs.canvas.width / 2
let y = pjs.canvas.height / 2

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    if(pjs.keyPressed("w")){
        pjs.ctx.fillStyle = "#55FF55"
        pjs.drawtext("W pressed",[x,y],size,"sans-serif","middle","center")
    }   
    else{
        pjs.ctx.fillStyle = "#FF5555"
        pjs.drawtext("W not pressed",[x,y],size,"sans-serif","middle","center")
    }
})

pjs.start()
