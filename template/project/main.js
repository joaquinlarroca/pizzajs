import * as pjs from "/source/modules/index.js"

pjs.setup(1920, 1080, 0.9);

pjs.loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    pjs.ctx.fillStyle = "#FFFFFF"
    pjs.drawtext("Hello World!",[960,540],32,"FiraCode","middle","center",0,1)
})  

pjs.start()