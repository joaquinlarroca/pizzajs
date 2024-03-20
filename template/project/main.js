// Use PizzaJS without a prefix
// Import global
import { global, image, time } from './source/modules/global.js'
// Import functions
import { initLoaderCheck, lerp, canvas, ctx, drawtext, loadImage, loadSound, loadFont, fillRect, setup, start, clear, fitText, measureTextWidth, shakeScreen } from './source/modules/functions.js';
// Import listeners
import { setupAllEventListeners, setupMouseListener, setupResizeListener, setupKeyboardListener, keyPressed, mouse, pressedKeys, preventKeys } from './source/modules/listener.js';
// Import all classes
import { actor, button, hitbox, hitbox2, hitboxCircle, rect, sound, slider, timeout, sound2 } from './source/modules/classes.js';
// Starts the loadCheck
initLoaderCheck();

setup(1920, 1080, 0.9, true);

window.addEventListener("pjsUpdate", () => {
    clear()
    ctx.fillStyle = "#FFFFFF"
    drawtext("Hello World! From PizzaJS", [960, 540], 32, "sans-serif", "middle", "center", 0, 1)
})

start()