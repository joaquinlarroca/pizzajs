import { start, setup, clear, ctx, drawtext, loadFont, canvas } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"


setup(1920, 1080, 0.9)

loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

let x = canvas.width / 2
let y = canvas.height / 2

window.addEventListener("pjsUpdate", () => {
    clear()
    ctx.fillStyle = "white"
    drawtext("Hello, world", [x, y], 64, "FiraCode", "middle", "center", 15, 1);
})

start()