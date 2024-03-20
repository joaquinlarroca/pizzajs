import { start, setup, clear, ctx, fillRect } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 1);

window.addEventListener("pjsUpdate", () => {
    clear();
    ctx.fillStyle = "red";
    fillRect(64, 64, 128, 128);
})

start()