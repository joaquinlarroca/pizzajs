import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080, 1);

let size = 256
let x = pjs.canvas.width / 2 - size
let y = pjs.canvas.height / 2 - size/4

let MySlider = new pjs.slider("color:#000000", "color:#FFFFFF", [x, y], [size*2, size/2], size/4, [0, 100],"#ff0000", 50)

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    MySlider.draw()
    pjs.ctx.fillStyle = "#FFFFFF"
    pjs.drawtext(MySlider.percentage,[size/8,size/8],size/4)
})

pjs.start()