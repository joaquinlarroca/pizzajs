import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080, 1);

window.addEventListener("pjsUpdate", () => {
    pjs.clear();
    pjs.ctx.fillStyle = "red";
    pjs.fillRect(64,64,128,128);
})

pjs.start()