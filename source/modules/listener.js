import { global } from './global.js'
import { canvas, setup } from './functions.js';

export let mouse = {
    x: 0,
    y: 0,
    pos: [0, 0],
    click: false,
    objectSelected: undefined,
};

export const pressedKeys = new Set();

export function keyPressed(key) {
    if (typeof key !== 'string') {
        global.error("l", 1);
        return undefined;
    }
    if (key == "space") {
        key = " "
    }
    return pressedKeys.has(key.toUpperCase());
}

export function setupResizeListener() {
    if (global.resizeListenersHadSetup == false) {
        global.resizeListenersHadSetup = true
        window.addEventListener('resize', () => {
            setup(global.setupWidth, global.setupHeight, global.setupMarginMultiplier, false);
        });
    }
    else {
        global.error("l", 4)
    }
}

export function setupKeyboardListener() {
    if (global.keyboardListenersHadSetup == false) {
        global.keyboardListenersHadSetup = true
        window.addEventListener('keydown', event => {
            pressedKeys.add(event.key.toUpperCase());
        });

        window.addEventListener('keyup', event => {
            pressedKeys.delete(event.key.toUpperCase());
        });
    }
    else {
        global.error("l", 2)
    }
}
export function setupMouseListener() {
    if (global.mouseListenersHadSetup == false) {
        global.mouseListenersHadSetup = true
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
    else {
        global.error("l", 3)
    }
}
export function setupAllEventListeners() {
    if (global.allListenersHadSetup == false) {
        global.allListenersHadSetup = true
        setupMouseListener();
        setupResizeListener();
        setupKeyboardListener();
    }
    else {
        global.error("l", 5)
    }
}