import * as pjs from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

pjs.setup(1920, 1080,1,false)



window.addEventListener("pjsUpdate", () => {
    pjs.clear()
})

pjs.start()