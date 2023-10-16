/**
 * PizzaJS
 * @version Alpha-1.0.0
 */

let global = {
    debug: false,
    plugin: {},
    actors: [],
    toLoad: 0,
    Loaded: 0,
    loadingTime: 10,
}
const mouse = {
    x: 0,
    y: 0,
    pos: [0, 0],
    click: false,
    isAlreadyDragging: false
}
let pjs = {
    version: "v1",
    build: "Alpha",
    hasSetup: false,
    lastTimestamp: 0,
    _ImagesLoadedURL_: {},
    _SoundsLoadedURL_: {},
    errors: new Set(),
    error(id) {
        if (typeof id == "number") {
            if (pjs.errors.size < 50 && !pjs.errors.has(id)) {
                if (typeof errors[id] == "string") {
                    console.error("PizzaJS: " + errors[id]);
                }
                else {
                    console.error("PizzaJS: undefined error, check id list");
                }
            } else if (!pjs.errors.has(id)) {
                console.error("PizzaJS: Current error size has exceeded it limit")
            }
            pjs.errors.add(id);
        } else if (!pjs.errors.has(id)) {
            console.error("PizzaJS: id must be only numbers")
            pjs.errors.add(id);
        }
    },

}

class hitbox {
    constructor(that, size = 0, color = undefined, offsetX = 0, offsetY = 0) {
        this.that = that
        if (-size * 2 >= this.that.width || -size * 2 >= this.that.height) {
            this.size = 0
            pjs.error(5)

        }
        else {
            this.size = size
        }
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.lineWidth = 5
        if (typeof color != "string") {
            this.color = `rgb(${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30})`
        }
        else {
            this.color = color
        }
        this.params = "To update value call any function on the hitbox object"
        this.left = this.that.x + this.offsetX
        this.right = this.that.x + this.that.width + this.offsetX + this.size * 2
        this.top = this.that.y + this.offsetY
        this.bottom = this.that.y + this.that.height + this.offsetY + this.size * 2
        this.width = this.right - this.left
        this.height = this.bottom - this.top
    }
    draw() {
        this.left = this.that.x + this.offsetX
        this.right = this.that.x + this.that.width + this.offsetX + this.size * 2
        this.top = this.that.y + this.offsetY
        this.bottom = this.that.y + this.that.height + this.offsetY + this.size * 2
        this.width = this.right - this.left
        this.height = this.bottom - this.top
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.color
        ctx.rect(this.left, this.top, this.width, this.height)
        ctx.stroke()
        ctx.restore();

    }
    collide(hitbox) {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.that.x + this.offsetX
        this.right = this.that.x + this.that.width + this.offsetX + this.size * 2
        this.top = this.that.y + this.offsetY
        this.bottom = this.that.y + this.that.height + this.offsetY + this.size * 2
        this.width = this.right - this.left
        this.height = this.bottom - this.top
        hitbox.left = hitbox.that.x + hitbox.offsetX
        hitbox.right = hitbox.that.x + hitbox.that.width + hitbox.offsetX + hitbox.size * 2
        hitbox.top = hitbox.that.y + hitbox.offsetY
        hitbox.bottom = hitbox.that.y + hitbox.that.height + hitbox.offsetY + hitbox.size * 2
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collide2(hitbox) {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.that.x + this.offsetX
        this.right = this.that.x + this.that.width + this.offsetX + this.size * 2
        this.top = this.that.y + this.offsetY
        this.bottom = this.that.y + this.that.height + this.offsetY + this.size * 2
        this.width = this.right - this.left
        this.height = this.bottom - this.top
        hitbox.left = hitbox.x
        hitbox.right = hitbox.x + hitbox.width
        hitbox.top = hitbox.y
        hitbox.bottom = hitbox.y + hitbox.height
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collidepoint(point) {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.that.x + this.offsetX
        this.right = this.that.x + this.that.width + this.offsetX + this.size * 2
        this.top = this.that.y + this.offsetY
        this.bottom = this.that.y + this.that.height + this.offsetY + this.size * 2
        this.width = this.right - this.left
        this.height = this.bottom - this.top
        return this.right >= point[0] && this.left <= point[0] && this.bottom >= point[1] && this.top <= point[1]
    }
}
class hitbox2 {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.lineWidth = 5
        this.color = `rgb(${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30})`
        this.params = "To update value call any function on the hitbox object"
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
    draw() {
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.color
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.stroke()
        ctx.restore();

    }
    collide(hitbox) {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        hitbox.left = hitbox.that.x + hitbox.offsetX
        hitbox.right = hitbox.that.x + hitbox.that.width + hitbox.offsetX + hitbox.size * 2
        hitbox.top = hitbox.that.y + hitbox.offsetY
        hitbox.bottom = hitbox.that.y + hitbox.that.height + hitbox.offsetY + hitbox.size * 2
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collide2(hitbox) {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        hitbox.left = hitbox.that.x
        hitbox.right = hitbox.x + hitbox.width
        hitbox.top = hitbox.y
        hitbox.bottom = hitbox.y + hitbox.height
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collidepoint(point) {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        return this.right >= point[0] && this.left <= point[0] && this.bottom >= point[1] && this.top <= point[1]
    }
}
class button {
    constructor(image, [x, y], [width, height], text, backgroundColor, textColor = "#ffffff") {
        this.image = new Image()
        this.image.src = image
        if (image == "bypass.img") {
            this.image.src = "./source/images/bypass.png"
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.hitbox = new hitbox(this, 0, undefined, 0, 0)
        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2
        this.angle = 0

        this.alpha = 1

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height

        this.hover = false
        this.click = false

        this.textActive = typeof text == "string"
        this.text = text
        this.textColor = textColor
        this.fontFamily = "sans-serif"
        this.baseline = "middle"
        this.textAlign = "center"

        if (this.text.length >= 24) {
            this.text = this.text.substring(0, 24)
        }

        if ((this.height / this.width * 750) / this.text.length > this.height - 10) {
            this.textSize = this.height - 20
        }
        else {
            this.textSize = ((this.height / this.width * 700) / this.text.length);
        }


        this.backgroundColorActive = typeof backgroundColor == "string"
        this.backgroundColor = backgroundColor
    }
    draw() {
        this.pos = [this.x + this.width / 2, this.y + this.height / 2]

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2
        ctx.save();
        ctx.translate(this.anglex, this.angley);
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;
        if (this.backgroundColorActive) {
            ctx.fillStyle = this.backgroundColor
            ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
        }
        ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
        if (this.textActive) {
            ctx.fillStyle = this.textColor
            drawtext(this.text, [this.pos[0], this.pos[1]], this.textSize, this.fontFamily, this.baseline, this.textAlign, this.angle, this.alpha)
        }
        ctx.fillStyle = "#000000"
    }
    update() {
        if (this.hitbox.collidepoint(mouse.pos)) {
            this.hover = true
            if (mouse.click && !mouse.isAlreadyDragging) {
                this.click = true
            }
            else {
                this.click = false
            }
        }
        else {
            this.hover = false
            this.click = false
        }
    }
    changeImage(url) {
        if (pjs._ImagesLoadedURL_[url]) {
            this.image.src = pjs._ImagesLoadedURL_[url].src;
        }
        else {
            var image = loadImage(url)
            this.image.src = image.src
        }
    }
    grow(growx, growy) {
        this.x -= growx / 2
        this.y -= growy / 2
        this.width += growx
        this.height += growy
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
}
class slider {
    constructor(imageBar, imageSlider, [x, y], [width, height], SliderWidth, [minpercentage, maxpercentage], sliderBackgroundColor, currentpercentage) {
        this.imagebar = new Image()
        this.imagebar.src = imageBar
        this.readCode = imageBar.split(":")
        if (this.readCode[0] == "color") {
            this.imageColor = this.readCode[1]
            this.imagebar.src = "./source/images/bypass.png"
        }
        else {
            this.imageColor = "rgba(0,0,0,0)"
        }
        if (imageBar == "bypass.img") {
            this.imagebar.src = "./source/images/bypass.png"
        }

        this.imageSlider = new Image()
        this.imageSlider.src = imageSlider
        this.readCode = imageSlider.split(":")
        if (this.readCode[0] == "color") {
            this.imageSliderColor = this.readCode[1]
            this.imageSlider.src = "./source/images/bypass.png"
        }
        else {
            this.imageSliderColor = "rgba(0,0,0,0)"
        }
        if (imageBar == "bypass.img") {
            this.imageSlider.src = "./source/images/bypass.png"
        }

        this.barx = x
        this.bary = y

        this.barheight = height

        this.maxpercentage = maxpercentage
        this.minpercentage = minpercentage
        this.percentage = currentpercentage
        if (SliderWidth > width / 2) {
            SliderWidth = height
            this.width = SliderWidth
            this.barwidth = width - SliderWidth
        }
        else {
            this.width = SliderWidth
            this.barwidth = width - SliderWidth
        }
        this.height = height
        this.y = y

        if (this.percentage < this.minpercentage) {
            this.percentage = this.minpercentage
        }
        if (this.percentage > this.maxpercentage) {
            this.percentage = this.maxpercentage
        }
        this.x = this.barx + ((this.percentage - this.minpercentage) * this.barwidth / (this.maxpercentage - this.minpercentage)) + this.width;

        this.drag = {
            hitbox: new hitbox(this, 0, undefined, -this.width, 0),
            active: false,
            hasSetOffset: false,
            offsetX: 0,
            offsetY: 0,
        }

        this.hitbox = new hitbox(this, 0, undefined, -this.width, 0)
        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2
        this.angle = 0

        this.alpha = 1

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height

        this.hover = false
        this.click = false

        this.sliderBackgroundColor = sliderBackgroundColor
    }
    draw() {

        this.pos = [this.x + this.width / 2, this.y + this.height / 2]

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height

        this.anglex = this.barx + this.barwidth / 2
        this.angley = this.bary + this.barheight / 2
        ctx.save();
        ctx.translate(this.anglex, this.angley);
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;

        ctx.fillStyle = this.imageColor
        ctx.fillRect(-this.barwidth / 2, -this.barheight / 2, this.barwidth + this.width, this.barheight)

        ctx.drawImage(this.imagebar, -this.barwidth / 2, -this.barheight / 2, this.barwidth + this.width, this.barheight);

        ctx.fillStyle = this.sliderBackgroundColor
        ctx.fillRect((-this.barwidth / 2), -this.barheight / 2, this.x - this.barx - this.width / 2, this.barheight)

        ctx.fillStyle = this.imageSliderColor
        ctx.fillRect((-this.barwidth / 2) + this.x - this.barx - this.width, -this.barheight / 2, this.width, this.height)

        ctx.drawImage(this.imageSlider, (-this.barwidth / 2) + this.x - this.barx - this.width, -this.barheight / 2, this.width, this.height);

        ctx.restore();
        ctx.fillStyle = "#000000"
    }
    update() {
        if (this.hitbox.collidepoint(mouse.pos)) {
            this.hover = true
            if (mouse.click) {
                this.click = true
            }
            else {
                this.click = false
            }
        }
        else {
            this.hover = false
        }
        if (((this.drag.hitbox.collidepoint(mouse.pos) && mouse.click) || this.drag.active)) {
            if (!this.drag.hasSetOffset) {
                this.drag.hasSetOffset = true;
                this.drag.offsetX = mouse.x - this.x;
                this.drag.offsetY = mouse.y - this.y;
            }

            this.drag.active = true

            this.x = mouse.x - this.drag.offsetX
            if (this.x >= this.barx + this.barwidth + this.width) {
                this.x = this.barx + this.barwidth + this.width
            }
            if (this.x <= this.barx + this.width) {
                this.x = this.barx + this.width
            }
            this.percentage = Math.round(-((this.barx + this.width - this.x) / this.barwidth) * (this.maxpercentage - this.minpercentage) + this.minpercentage);
        }
        else {
            this.drag.hasSetOffset = false;
            this.x = this.barx + ((this.percentage - this.minpercentage) * this.barwidth / (this.maxpercentage - this.minpercentage)) + this.width;
        }
        if (this.drag.active && !mouse.click) {
            this.drag.active = false

        }


    }
    changeImage(urlbg, urlslider) {
        if (pjs._ImagesLoadedURL_[urlbg]) {
            this.imagebar.src = pjs._ImagesLoadedURL_[urlbg].src;
        }
        else {
            var image1 = pjs.loadImage(urlbg)
            this.imagebar.src = image1.src
        }

        if (pjs._ImagesLoadedURL_[urlslider]) {
            this.imageSlider.src = pjs._ImagesLoadedURL_[urlbg].src;
        }
        else {
            var image2 = pjs.loadImage(urlslider)
            this.imageSlider.src = image2.src
        }

    }

}
class rect {
    constructor([x, y], [width, height], color = "#FFFFFF") {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.hitbox = new hitbox(this, 0, undefined, 0, 0)
        this.color = color
        this.alpha = 1.0
        this.angle = 0
        this.angley = 0
        this.anglex = 0
    }
    draw() {
        this.pos = [this.x + this.width / 2, this.y + this.height / 2]
        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2
        ctx.save();
        ctx.translate(this.anglex, this.angley);
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)

        ctx.restore();
    }
}
class actor {
    constructor(image, [x, y], [width, height], [offsetX = 0, offsetY = 0]) {
        this.image = new Image()

        this.image.src = image


        global.actors.push(this)
        if (image == "bypass.img") {
            this.image.src = "./source/images/bypass.png"
        }


        this.conditions = {
            canExitCanvas: false,
            customMovement: false,
            isDraggable: false,
        }

        this.x = x + offsetX
        this.y = y + offsetY
        this.offsetX = offsetX
        this.offsetY = offsetY

        this.drag = {
            hitbox: new hitbox(this, 0, undefined, -this.offsetX, -this.offsetY),
            active: false,
            hasSetOffset: false,
            offsetX: 0,
            offsetY: 0,
        }
        this.hitbox = new hitbox(this, 0, undefined, -this.offsetX, -this.offsetY)
        this.xvelocity = 0
        this.yvelocity = 0
        this.velocityMultiplier = 0.8

        this.width = width
        this.height = height

        this.pos = [this.x + this.width / 2, this.y + this.height / 2]

        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2
        this.angle = 0

        this.alpha = 1

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
    draw() {
        this.pos = [this.x + this.width / 2, this.y + this.height / 2]
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height

        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2


        ctx.save();
        ctx.translate(this.anglex, this.angley);

        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.image, -this.width / 2 - this.offsetX, -this.height / 2 - this.offsetY, this.width, this.height);
        ctx.restore();
    }
    drawAnchorPoint() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(this.x - 3 + this.width / 2, this.y - 3 + this.height / 2, 6, 6)
        ctx.fillStyle = "#000000"
        ctx.fillRect(this.x - 1 + this.width / 2, this.y - 1 + this.height / 2, 2, 2)
        ctx.restore();
    }
    update() {
        if (!this.conditions.customMovement) {
            this.x += this.xvelocity
            this.y += this.yvelocity
            this.xvelocity *= this.velocityMultiplier
            this.yvelocity *= this.velocityMultiplier
        }
        if (this.conditions.isDraggable) {
            if (((this.drag.hitbox.collidepoint(mouse.pos) && mouse.click) || this.drag.active)) {
                if (!this.drag.hasSetOffset) {
                    this.drag.hasSetOffset = true;
                    this.drag.offsetX = mouse.x - this.x;
                    this.drag.offsetY = mouse.y - this.y;
                }
                this.drag.active = true
                this.x = mouse.x - this.drag.offsetX
                this.y = mouse.y - this.drag.offsetY
            }
            else {
                this.drag.hasSetOffset = false;
            }
            if (this.drag.active && !mouse.click) {
                this.drag.active = false
            }
        }
        else {
            this.drag.active = false
        }

        if (!this.conditions.canExitCanvas) {
            if (this.x - this.offsetX < 0) {
                this.x = this.offsetX;
                this.xvelocity = 0
            }
            if (this.x + this.width - this.offsetX > canvas.width) {
                this.x = canvas.width - this.width + this.offsetX
                this.xvelocity = 0
            }
            if (this.y - this.offsetY < 0) {
                this.y = this.offsetY
                this.yvelocity = 0
            }
            if (this.y + this.height - this.offsetY > canvas.height) {
                this.y = canvas.height - this.height + this.offsetY
                this.yvelocity = 0
            }
        }

    }
    angletopoint(point) {
        var actorx = this.x + this.width / 2
        var actory = this.y + this.height / 2
        this.angle = Math.atan2(point[1] - actory, point[0] - actorx) * (180 / Math.PI)
    }
    changeImage(url) {
        if (pjs._ImagesLoadedURL_[url]) {
            this.image.src = pjs._ImagesLoadedURL_[url].src;
        }
        else {
            var image = loadImage(url)
            this.image.src = image.src
        }
    }
    grow(growx, growy) {
        this.x -= growx / 2
        this.y -= growy / 2
        this.width += growx
        this.height += growy
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
}
class sound {
    constructor(url, playbackRate, volume, loop) {
        this.sound = new Audio()
        this.sound.src = url
        this.sound.loop = loop
        this.playbackRate = playbackRate
        this.volume = volume
        this.ended = this.sound.ended
        this.duration = this.sound.duration
        this.currentTime = this.sound.currentTime
        this.paused = this.sound.paused

        this.sound.addEventListener('ended', () => {
            this.ended = true;
        });
        this.sound.addEventListener('timeupdate', () => {
            this.currentTime = this.sound.currentTime;
        });
    }
    play() {
        this.ended = false
        this.sound.loop = this.loop
        this.sound.playbackRate = this.playbackRate
        this.sound.volume = this.volume;
        this.sound.play()
    }
    pause() {
        this.sound.pause()
    }
    stop() {
        this.sound.currentTime = 0
        if (!this.sound.paused) {
            this.sound.pause()
        }
    }
    setCurrentTime(seconds) {
        if (seconds >= 0 && seconds <= this.sound.duration) {
            this.currentTime = seconds;
            this.sound.currentTime = seconds;
        }
    }
}
const pressedKeys = new Set();

document.addEventListener('keydown', event => {
    pressedKeys.add(event.key.toUpperCase());
});

document.addEventListener('keyup', event => {
    pressedKeys.delete(event.key.toUpperCase());
});

function keyPressed(key) {
    if (typeof key !== 'string') {
        pjs.error(3)
        return undefined;
    }
    return pressedKeys.has(key.toUpperCase());
}

document.addEventListener("pointermove", (event) => {
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

document.addEventListener("pointerdown", (event) => {
    if (canvas) {
        event.preventDefault();
        mouse.click = true;
    }
});

document.addEventListener("pointerup", (event) => {
    if (canvas) {
        mouse.click = false;
    }
});
