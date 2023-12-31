import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"


pjs.setup(1920, 1080, 0.9)

pjs.loadFont("FiraCode","/source/fonts/FiraCode/FiraCode-Regular.ttf")

let x = pjs.canvas.width / 2
let y = pjs.canvas.height / 2

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    pjs.ctx.fillStyle = "white"
    pjs.drawtext("Hello, world", [x, y], 64, "FiraCode", "middle", "center", 15, 1);
})

pjs.start()