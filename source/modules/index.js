import { global, image } from './global.js'
import { initLoaderCheck, canvas, ctx, drawtext, loadImage, loadSound, loadFont, fillRect, setup, start, clear, fitText, measureTextWidth, shakeScreen } from './functions.js';
import { setupAllEventListeners, setupMouseListener, setupResizeListener, setupKeyboardListener, keyPressed, mouse, pressedKeys } from './listener.js';
import { actor, button, hitbox, hitbox2, hitboxCircle, rect, sound, slider, timeout } from './classes.js';

initLoaderCheck()

export {
    fitText,
    global,
    ctx,
    image,
    measureTextWidth,
    drawtext,
    loadImage,
    loadSound,
    loadFont,
    fillRect,
    setup,
    start,
    canvas,
    clear,
    shakeScreen,
    setupAllEventListeners,
    setupMouseListener,
    setupResizeListener,
    setupKeyboardListener,
    keyPressed,
    mouse,
    pressedKeys,
    actor,
    button,
    hitbox,
    hitbox2,
    hitboxCircle,
    rect,
    timeout,
    sound,
    slider
};