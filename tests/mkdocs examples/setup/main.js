import { start, setup, clear } from "/source/modules/index.js"
import "/source/Addons/DefaultScreenshot.js"

setup(1920, 1080, 1, false)

window.addEventListener("pjsUpdate", () => {
    clear()
})

start()