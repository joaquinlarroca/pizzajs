import { start, setup, global, clear, time, drawtext, loadFont, ctx } from "/source/modules/index.js"

setup(500, 500, 0.9);
loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

let size = 16


window.addEventListener("pjsUpdate", () => {
    clear()
    ctx.fillStyle = "#FFFFFF"
    drawtext(time.delta, [8, 8], size, "FiraCode", "top", "left")
    drawtext(time.time, [8, 8 + size], size, "FiraCode", "top", "left")
    drawtext(time.scale, [8, 8 + size * 2], size, "FiraCode", "top", "left")
    drawtext(time.frameCount, [8, 8 + size * 3], size, "FiraCode", "top", "left")
    drawtext(global.fps, [8, 8 + size * 4], size, "FiraCode", "top", "left")
})
start()