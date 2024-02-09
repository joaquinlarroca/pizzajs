import { global } from "./global.js"
import { setupAllEventListeners } from "./listener.js";
/**
 * Triggers a loader animation or hide effect for a specific loader element.
 */
export function triggerLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = 1;
        const interval = setInterval(() => {
            loader.style.opacity -= 0.075;
            if (loader.style.opacity <= 0.3) {
                clearInterval(interval);
                loader.style.display = 'none';
            }
        }, 10);
    }
}
/**
 * Initializes a loader check to trigger a loader based on certain conditions.
 */
export function initLoaderCheck() {
    if (document.getElementById('loader') && document.getElementById("data")) {
        document.getElementById("data").innerText = "PizzaJS: " + global.build + " " + global.version;
        const interval = setInterval(() => {
            if (global.toLoad == global.Loaded && global.loadingTime <= 0 && document.readyState === "complete") {
                global.hasLoaded = true
                triggerLoader();
                clearInterval(interval);
            }
            global.loadingTime--
        }, 100)
    }
}
export function shakeScreen(intensity, duration) {
    if (typeof intensity != "number" || !intensity || intensity <= 0) {
        global.error("f", 6);
    }
    else if (typeof duration != "number" || !duration || duration <= 0) {
        global.error("f", 7);
    }
    else if (global.shakingScreen == false) {
        global.shakingScreen = true
        const startX = ctx.getTransform().e;
        const startY = ctx.getTransform().f;
        const startMatrix = ctx.getTransform();
        let endTime = Date.now() + duration;
        let timerId = setInterval(() => {
            if (Date.now() < endTime) {
                const xShift = (Math.random() * 2 - 1) * intensity;
                const yShift = (Math.random() * 2 - 1) * intensity;
                ctx.setTransform(1, 0, 0, 1, startX + xShift, startY + yShift);
            } else {
                clearInterval(timerId);
                ctx.setTransform(startMatrix);
                global.shakingScreen = false
            }
        }, 10);
    }
}
/**
 * Draws text on the canvas with customizable properties.
 * 
 * @param {string} text - The text to be drawn (default: "undefined").
 * @param {Array<number>} [x = 0, y = 0] - The coordinates [x, y] where the text will be drawn (default: [0, 0]).
 * @param {number} fontSize - The fontSize (default: 24).
 * @param {string} fontFamily - The font family (default: "sans-serif").
 * @param {string} baseline - The text baseline (default: "top").
 * @param {string} textAlign - The text alignment (default: "start").
 * @param {number} angle - The rotation angle in degrees (default: 0).
 * @param {number} alpha - The global alpha (transparency) value (default: 1.0).
 */
export function drawtext(text = "undefined", [x = 0, y = 0], fontSize = 24, fontFamily = "sans-serif", baseline = "top", textAlign = "start", angle = 0, alpha = 1.0) {
    ctx.save();
    ctx.textBaseline = baseline;
    ctx.textAlign = textAlign;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.translate(x, y);
    ctx.rotate(0.017453292519943295 * angle);
    ctx.globalAlpha = alpha;
    ctx.fillText(text, 0, 0);
    ctx.restore();
}
export function measureTextWidth(text, fontSize, fontFamily) {
    if (typeof text != "string" && typeof text != "number" && typeof text != "boolean") {
        global.error("f", 9)
        return 16
    }
    else if (!document.fonts.check(`16px ${fontFamily}`)) {
        global.error("f", 10)
        return 16
    }
    else if (typeof fontSize != "number" && fontSize > 0) {
        global.error("f", 12)
        return 16
    }
    else {
        text = text.toString()
        ctx.font = `${fontSize}px ${fontFamily}`;
        const textMetrics = ctx.measureText(text);
        return textMetrics.width;
    }
}
export function fitText(text, width, height, fontFamily) {
    if (typeof text != "string" && typeof text != "number" && typeof text != "boolean") {
        global.error("f", 9)
        return 16
    }
    else if (!document.fonts.check(`16px ${fontFamily}`)) {
        global.error("f", 10)
        return 16
    }
    else if (typeof width != "number" && width >= 0 && typeof height != "number" && height >= 0) {
        global.error("f", 11)
        return 16
    }
    else {
        let fontSize = Math.min(width, height);
        // Measure text width with current font size
        ctx.font = `${fontSize}px ${fontFamily}`;
        const textMetrics = ctx.measureText(text);
        // Calculate the scaling factor to fit the text
        let scaleFactor = Math.min(width / textMetrics.width, height / textMetrics.actualBoundingBoxAscent);
        if (text.length === 1 && textMetrics.width > width) {
            scaleFactor = width / textMetrics.width;
        }
        // Update font size with scaling factor
        fontSize *= scaleFactor;
        while (ctx.measureText(text).width > width) {
            fontSize -= 0.1;
            ctx.font = `${fontSize}px ${fontFamily}`;
        }
        return fontSize;
    }
}
/**
 * Loads an image from the given URL.
 * @param {string} name - Set a name to the image(to use it with the name use image[name])
 * @param {string} url - The URL of the image to be loaded.
 * @returns {string} - Returns the URL of the image.
 */
export function loadImage(name, url) {
    if (typeof url == "string") {
        if (typeof name == "string" || typeof name == "undefined") {
            global.toLoad++;
            const object = new Image();
            object.src = url;
            if (typeof name != "undefined") {
                image[name] = object.src
            }
            if (global._ImagesLoadedURL_[url]) {
                return object.src;
            } else {
                object.onload = function () {
                    global._ImagesLoadedURL_[url] = object;
                    global.Loaded++;
                };
                object.onerror = function (error) {
                    global.error("f", 2);
                    return error
                };
                return object.src;
            }
        }
        else {
            global.error("f", 8);
        }
    }
    else {
        global.error("f", 5);
    }
}
/**
 * Loads an audio file from the given URL.
 * @param {string} url - The URL of the audio file to be loaded.
 * @returns {string} - Returns the URL of the audio.
 */
export function loadSound(url) {
    if (typeof url == "string") {
        global.toLoad++;
        const audio = new Audio();
        audio.src = url;
        if (global._SoundsLoadedURL_[url]) {
            return global._SoundsLoadedURL_[url];
        } else {
            audio.oncanplaythrough = function () {
                global._SoundsLoadedURL_[url] = audio;
                global.Loaded++;
            };
            audio.onerror = function (error) {
                global.error("f", 3);
                return error
            };
            return audio.src;
        }
    }
    else {
        global.error("f", 5);
    }
}
/** Asynchronously loads a font using FontFace API.
* @param { string } fontFamily - The name of the font family.
* @param { string } fontURL - The URL of the font file.
* @returns { Promise } A Promise that resolves with the loaded font or rejects with an error.
*/
export async function loadFont(fontFamily, fontURL) {
    if (typeof fontFamily == "string" && typeof fontURL == "string") {
        try {
            const font = new FontFace(fontFamily, `url(${fontURL})`);
            return font.load().then((loadedFont) => {
                document.fonts.add(loadedFont);
            });
        } catch (error) {
            global.error("f", 4);
            return error;
        }
    }
    else {
        global.error("f", 5);
    }
}
/**
 * Clears the canvas if the context (`ctx`) is available.
 */
export function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.dispatchEvent(new Event('pjsAfterClear'));
}
/**
 * Draws a filled rectangle.
 * 
 * @param {number} x - The x-coordinate of the starting point of the rectangle (default: 0).
 * @param {number} y - The y-coordinate of the starting point of the rectangle (default: 0).
 * @param {number} width - The width of the rectangle (default: 0).
 * @param {number} height - The height of the rectangle (default: 0).
 */
export function fillRect(x = 0, y = 0, width = 0, height = 0) {
    ctx.fillRect(x, y, width, height);
}
/**
 * Starts an animation loop using requestAnimationFrame.
 */
export function start() {
    if (global.hasSetup) {
        let timestamp = performance.now();

        function animate(currentTimestamp) {
            global.deltaTime = (currentTimestamp - timestamp) / 1000;
            timestamp = currentTimestamp;
            notifyUpdate(global.deltaTime, Math.round(1 / global.deltaTime));
            
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }
    else {
        global.error("f", 1);
    }
}
/**
 * Notifies about updates by dispatching a custom 'pjsUpdate' event.
 */
export function notifyUpdate(deltaTime, fps) {
    window.dispatchEvent(new CustomEvent('pjsUpdate', { detail: { deltaTime, fps } }));
    window.dispatchEvent(new Event('pjsAfterUpdate'));
}

export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d');
canvas.id = "pjsCanvas";
canvas.style.display = "initial"
/**
 * Sets up the canvas with specified width, height, and other config.
 * 
 * @param {number} width - The width of the canvas.
 * @param {number} height - The height of the canvas.
 * @param {number} marginMultiplier - The multiplier for adjusting margin (default: 1).
 * @param {boolean} listeners - Boolean to determine whether to set up event listeners (default: true).
 */
export function setup(width, height, marginMultiplier = 1, listeners = true) {
    if (typeof width == "number" && typeof height == "number" && width > 0 && height > 0) {
        if (typeof marginMultiplier != "number" || marginMultiplier <= 0) {
            marginMultiplier = 1
        }
        if (!global.hasSetup) {
            global.hasSetup = true;
            global.setupWidth = width;
            global.setupHeight = height;
            global.setupMarginMultiplier = marginMultiplier;
            document.body.append(canvas);
            if (listeners == true) {
                setupAllEventListeners();
            }
        }

        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;

        let adjustedWidth, adjustedHeight;

        if (clientWidth / clientHeight > width / height) {
            adjustedHeight = clientHeight;
            adjustedWidth = (clientHeight * width) / height;
        } else {
            adjustedWidth = clientWidth;
            adjustedHeight = (clientWidth * height) / width;
        }
        adjustedWidth *= marginMultiplier;
        adjustedHeight *= marginMultiplier;

        canvas.width = width;
        canvas.height = height;

        canvas.style.width = `${adjustedWidth}px`;
        canvas.style.height = `${adjustedHeight}px`;
        canvas.style.aspectRatio = `attr(width) / attr(height)`;
        ctx.imageSmoothingEnabled = false;
    }
    else {
        global.error("f", 8);
    }
}

