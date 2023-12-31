import { global, image } from '/source/modules/global.js'
import { initLoaderCheck, canvas, ctx, drawtext, loadImage, loadSound, loadFont, fillRect, setup, start, clear, fitText, measureTextWidth } from '/source/modules/functions.js';
import { setupAllEventListeners, setupMouseListener, setupResizeListener, setupKeyboardListener, keyPressed, mouse, pressedKeys } from '/source/modules/listener.js';
import { actor, button, hitbox, hitbox2, rect, sound, slider } from '/source/modules/classes.js';

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