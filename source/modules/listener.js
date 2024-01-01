import { global } from './global.js'
import { canvas, setup } from './functions.js';

export let mouse = {
    x: 0,
    y: 0,
    pos: [0, 0],
    click: false,
    objectSelected: null,
};

export const pressedKeys = new Set();

export function keyPressed(key) {
    if (typeof key !== 'string') {
        pjs.error(3)
        return undefined;
    }
    if(key == "space"){
        key = " "
    }
    return pressedKeys.has(key.toUpperCase());
}

export function setupResizeListener() {
    window.addEventListener('resize', () => {
        setup(global.setupWidth, global.setupHeight, global.setupMarginMultiplier,false);
    });
}

export function setupKeyboardListener() {
    window.addEventListener('keydown', event => {
        pressedKeys.add(event.key.toUpperCase());
    });

    window.addEventListener('keyup', event => {
        pressedKeys.delete(event.key.toUpperCase());
    });
}
export function setupMouseListener() {
    window.addEventListener("pointermove", (event) => {
        if (canvas) {
            let rect = canvas.getBoundingClientRect();
            const scaleFactorX = canvas.width / rect.width;
            const scaleFactorY = canvas.height / rect.height;
            const scaledX = (event.clientX - rect.left) * scaleFactorX;
            const scaledY = (event.clientY - rect.top) * scaleFactorY;

            mouse.x = scaledX;
            mouse.y = scaledY;
            mouse.pos = [Math.round(scaledX), Math.round(scaledY)];
        }
    });

    window.addEventListener("pointerdown", (event) => {
        if (canvas) {
            event.preventDefault();
            mouse.click = true;
        }
    });

    window.addEventListener("pointerup", (event) => {
        if (canvas) {
            mouse.click = false;
        }
    });
}
export function setupAllEventListeners() {
    setupMouseListener();
    setupResizeListener();
    setupKeyboardListener();
}