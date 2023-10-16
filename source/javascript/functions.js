if (document.getElementById('loader')) {
    document.getElementById("data").innerText = "PizzaJS: " + pjs.build + " " + pjs.version
    var interval = setInterval(() => {
        if (global.toLoad == global.Loaded && global.loadingTime <= 0) {
            triggerLoader()
            clearInterval(interval)
        }
        global.loadingTime--
    }, 100)

}
function triggerLoader() {
    document.getElementById('loader').style.opacity = 1
    var interval = setInterval(() => {
        document.getElementById('loader').style.opacity -= 0.075
        if (document.getElementById('loader').style.opacity <= 0.3) {
            document.getElementById('loader').style.display = 'none'
            clearInterval(interval)
        }
    }, 10)
}


function drawtext(text = "undefined", [x = 0, y = 0], size = 24, fontFamily = "sans-serif", baseline = "top", textAlign = "start", angle = 0, alpha = 1.0) {
    ctx.textBaseline = baseline;
    ctx.textAlign = textAlign;
    ctx.font = size + "px " + fontFamily;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(0.017453292519943295 * angle);
    ctx.globalAlpha = alpha;
    ctx.fillText(text, 0, 0);
    ctx.restore();
}
function loadImage(url) {
    global.toLoad++;
    var image = new Image()
    image.src = url
    if (pjs._ImagesLoadedURL_[url]) {
        return pjs._ImagesLoadedURL_[url];
    } else {
        image.onload = function () {
            pjs._ImagesLoadedURL_[url] = image;
            global.Loaded++;
        };
        image.onerror = function () {
            pjs.error(4)
        };
        return image.src;
    }
}
function loadSound(url) {
    global.toLoad++;
    var audio = new Audio();
    audio.src = url;
    if (pjs._SoundsLoadedURL_[url]) {
        return pjs._SoundsLoadedURL_[url];
    } else {
        audio.oncanplaythrough = function () {
            pjs._SoundsLoadedURL_[url] = audio;
            global.Loaded++;
        };
        audio.onerror = function () {
            pjs.error(4);
        };
        return audio.src;
    }
}
async function loadFont(fontFamily, fontURL) {
    const font = new FontFace(fontFamily, `url(${fontURL})`);
    return font.load().then((loadedFont) => document.fonts.add(loadedFont));
}

function clear() {
    if (ctx) {
        return ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        pjs.error(0)
        return undefined;
    }
}
function fillRect(x = 0, y = 0, width = 0, height = 0) {
    ctx.fillRect(x, y, width, height)
}
function start(timestamp) {
    if (!timestamp) {
        timestamp = 0;
    }
    if (!pjs.lastTimestamp) {
        pjs.lastTimestamp = timestamp;
    }
    pjs.deltaTime = (timestamp - pjs.lastTimestamp) / 1000
    pjs.lastTimestamp = timestamp
    if (typeof update === "function") {
        update();
        requestAnimationFrame(start);
    }
    else {
        pjs.error(1)
    }
}
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d');
canvas.id = "pjsCanvas"
canvas.style.backgroundColor = "#111111"

function setup(width, height, marginMultiplier = 1) {
    if (!pjs.hasSetup) {
        pjs.hasSetup = true
        document.body.append(canvas);
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
    adjustedWidth *= marginMultiplier
    adjustedHeight *= marginMultiplier

    canvas.width = width;
    canvas.height = height;


    canvas.style.width = `${adjustedWidth}px`;
    canvas.style.height = `${adjustedHeight}px`;
    canvas.style.aspectRatio = `attr(width) / attr(height)`;
    ctx.imageSmoothingEnabled = false
}