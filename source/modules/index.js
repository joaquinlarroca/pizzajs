import { global, image } from './global.js'
import { initLoaderCheck, canvas, ctx, drawtext, loadImage, loadSound, loadFont, fillRect, setup, start, clear, fitText, measureTextWidth } from './functions.js';
import { setupAllEventListeners, setupMouseListener, setupResizeListener, setupKeyboardListener, keyPressed, mouse, pressedKeys } from './listener.js';
import { actor, button, hitbox, hitbox2, rect, sound, slider } from './classes.js';

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
    rect,
    sound,
    slider
};