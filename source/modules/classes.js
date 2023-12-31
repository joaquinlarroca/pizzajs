import { canvas, ctx, drawtext, loadImage, loadSound, fitText } from "./functions.js";
import { mouse } from "./listener.js"
import { global } from './global.js'
export class hitbox {
    constructor(that, multiplier = 0, color = undefined, offsetX = 0, offsetY = 0) {
        this.that = that
        if (typeof this.that.x != "number" || typeof this.that.y != "number" ||
            typeof this.that.width != "number" || typeof this.that.height != "number" ||
            this.that.width <= 0 || this.that.height <= 0 || typeof offsetX != "number" || typeof offsetY != "number") {
            global.error(11);
        }
        if (typeof multiplier != "number" || multiplier < 0 || multiplier > 1) {
            global.error(12)
        }
        this.multiplier = multiplier
        this.offsetX = offsetX
        this.offsetY = offsetY
        if (global.setupWidth == -1 && global.setupHeight == -1) {
            this.lineWidth = 5
        }
        else {
            this.lineWidth = (global.setupWidth + global.setupHeight) / 750
        }
        if (typeof color != "string") {
            this.color = `rgb(${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30})`;
        }
        else {
            this.color = color;
        }
        this.params = "waiting updateDimensions()"
    }
    updateDimensions() {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.that.x + this.offsetX + (this.that.width * this.multiplier * .5)
        this.right = this.that.x + this.that.width + this.offsetX - (this.that.width * this.multiplier * .5)
        this.top = this.that.y + this.offsetY + (this.that.height * this.multiplier * .5)
        this.bottom = this.that.y + this.that.height + this.offsetY - (this.that.height * this.multiplier * .5)
        this.width = this.right - this.left
        this.height = this.bottom - this.top
    }
    draw() {
        this.updateDimensions()
        ctx.save()
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.color
        ctx.rect(this.left, this.top, this.width, this.height)
        ctx.stroke()
        ctx.restore()
    }
    collide(hitbox) {
        this.updateDimensions()
        hitbox.updateDimensions()
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collide2(hitbox) {
        this.updateDimensions()
        hitbox.updateDimensions()
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collidepoint(point) {
        this.updateDimensions()
        return this.right >= point[0] && this.left <= point[0] && this.bottom >= point[1] && this.top <= point[1]
    }
}
export class hitbox2 {
    constructor(x, y, width, height) {
        if (typeof x != "number" || typeof y != "number" ||
            typeof width != "number" || typeof height != "number" ||
            width <= 0 || height <= 0) {
            global.error(11);
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.lineWidth = (global.setupWidth + global.setupHeight) / 750
        this.color = `rgb(${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30})`
        this.params = "To update value call any function on the hitbox object"
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.color
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.stroke()
        ctx.restore();
    }
    updateDimensions() {
        this.params = Math.round(this.left) + " : " + Math.round(this.right) + "  :: " + Math.round(this.top) + "  : " + Math.round(this.bottom)
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
    collide(hitbox) {
        this.updateDimensions()
        hitbox.updateDimensions()
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collide2(hitbox) {
        this.updateDimensions()
        hitbox.updateDimensions()
        return this.right >= hitbox.left && this.left <= hitbox.right && this.bottom >= hitbox.top && this.top <= hitbox.bottom
    }
    collidepoint(point) {
        this.updateDimensions()
        return this.right >= point[0] && this.left <= point[0] && this.bottom >= point[1] && this.top <= point[1]
    }
}
export class actor {
    constructor(string = "/source/icons/PizzaJS256x.png", [x = 0, y = 0], [width = 32, height = 32], [offsetX = 0, offsetY = 0]) {
        if (width <= 0 || height <= 0) {
            global.error(13);
        }
        string = string.split(":")
        this.image = new Image()
        if (string[0] == "color") {
            this.usingColor = true
            this.color = string[1]
        }
        else {
            this.usingColor = false
            this.image.src = loadImage(undefined,string[0])
        }

        this.conditions = {
            canExitCanvas: false,
            isDraggable: false,
        }


        this.x = x - offsetX
        this.y = y - offsetY
        this.offsetX = offsetX
        this.offsetY = offsetY

        this.width = width
        this.height = height

        this.halfwidth = this.width / 2
        this.halfheight = this.height / 2

        this.drag = {
            hitbox: new hitbox(this, 0, undefined, this.offsetX, this.offsetY),
            active: false,
            hasSetOffset: false,
            offsetX: 0,
            offsetY: 0,
        }
        this.hitbox = new hitbox(this, 0, undefined, this.offsetX, this.offsetY)
        this.velocity = {
            x: 0,
            y: 0
        }

        this.pos = [this.x + this.width / 2, this.y + this.height / 2]

        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2
        this.angle = 0

        this.alpha = 1

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        global.actors.push(this)
    }
    draw() {
        if (this.conditions.isDraggable) {
            if (((this.drag.hitbox.collidepoint(mouse.pos) && mouse.click && mouse.objectSelected == undefined) || this.drag.active && mouse.objectSelected == this)) {
                if (!this.drag.hasSetOffset) {
                    this.drag.hasSetOffset = true;
                    mouse.objectSelected = this
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
                mouse.objectSelected = undefined
            }
        }
        else {
            this.drag.active = false
        }

        if (!this.conditions.canExitCanvas) {
            if (this.x + this.offsetX < 0) {
                this.x = -this.offsetX;
                this.xvelocity = 0
            }
            if (this.x + this.width + this.offsetX > canvas.width) {
                this.x = canvas.width - this.width - this.offsetX
                this.xvelocity = 0
            }
            if (this.y + this.offsetY < 0) {
                this.y = -this.offsetY
                this.yvelocity = 0
            }
            if (this.y + this.height + this.offsetY > canvas.height) {
                this.y = canvas.height - this.height - this.offsetY
                this.yvelocity = 0
            }
        }
        this.halfwidth = this.width / 2
        this.halfheight = this.height / 2

        this.pos = [Math.round(this.x + this.halfwidth), Math.round(this.y + this.halfheight)]

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height

        this.anglex = this.x + this.halfwidth
        this.angley = this.y + this.halfheight

        ctx.save();
        ctx.translate(this.anglex, this.angley);

        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;
        if (this.usingColor) {
            ctx.fillStyle = this.color
            ctx.fillRect(-this.halfwidth + this.offsetX, -this.halfheight + this.offsetY, this.width, this.height);
        }
        else {
            ctx.drawImage(this.image, -this.halfwidth + this.offsetX, -this.halfheight + this.offsetY, this.width, this.height);
        };
        ctx.restore();
    }
    drawAnchorPoint() {
        //this.halfwidth = this.width / 2
        //this.halfheight = this.height / 2
        //ctx.save();
        //ctx.globalAlpha = this.alpha;
        //ctx.fillStyle = "#FFFFFF"
        //ctx.fillRect(this.x - 3 + this.halfwidth, this.y - 3 + this.halfheight, 6, 6)
        //ctx.fillStyle = "#000000"
        //ctx.fillRect(this.x - 1 + this.halfwidth, this.y - 1 + this.halfheight, 2, 2)
        //ctx.restore();

        this.halfwidth = this.width / 2
        this.halfheight = this.height / 2
        var size = (this.width + this.height) * 0.05
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(this.x - (size / 2) + this.halfwidth, this.y - (size / 2) + this.halfheight, size, size)
        ctx.fillStyle = "#000000"
        ctx.fillRect(this.x - ((size / 2) / 2) + this.halfwidth, this.y - ((size / 2) / 2) + this.halfheight, (size / 2), (size / 2))
        ctx.restore();
    }
    angletopoint(point) {
        this.angle = Math.atan2(point[1] - this.y + this.height / 2, point[0] - this.x + this.width / 2) * (180 / Math.PI)
    }
    changeImage(string) {
        string = string.split(":")
        if (string[0] == "color") {
            this.usingColor = true
            this.color = string[1]
        }
        else if (global.hasLoaded) {
            this.usingColor = false
            this.color = "#000000"
            this.image.src = loadImage(undefined,string[0]);
        }
        else {
            this.usingColor = false
            this.color = "#000000"
        }
    }
    grow(x, y) {
        this.x -= x / 2
        this.y -= y / 2
        this.width += x
        this.height += y
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
}
export class button {
    constructor(string = "/source/icons/PizzaJS256x.png", [x = 0, y = 0], [width = 64, height = 16], text = "Button", textColor = "#ffffff", textMargin = 0, timeoutMS = 0) {
        string = string.split(":")
        this.image = new Image()
        if (string[0] == "color") {
            this.usingColor = true
            this.color = string[1]
        }
        else {
            this.usingColor = false
            this.color = "#000000"
            this.image.src = loadImage(undefined,string[0])
        }

        global.buttons.push(this)
        if (string[0] == "bypass.img") {
            this.image.src = "/source/images/bypass.png"
        }

        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.desiredWidth = width - textMargin
        this.desiredHeight = height - textMargin

        this.hitbox = new hitbox(this, 0, undefined, 0, 0)
        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.height / 2
        this.angle = 0

        this.alpha = 1.0

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height

        this.hover = false
        this.click = false
        this.text = {
            active: typeof text == "string",
            text: text,
            color: textColor,
            size: fitText(text, this.desiredWidth, this.desiredHeight, "sans-serif"),
            fontFamily: "sans-serif",
            baseline: "middle",
            align: "center",
            margin: textMargin,
        }
        this.timeout = timeoutMS
        this.canClickDueTimeout = true
        //while ((this.text.ctxMeasure.height < this.desiredHeight || this.text.ctxMeasure.height === 0) ||
        //    (this.text.ctxMeasure.width < this.desiredWidth && this.text.ctxMeasure.width < this.desiredHeight)) {
        //     Adjust font size with a smaller increment to avoid overshooting
        //    this.text.size += .25;
        //
        //    ctx.font = `${this.text.size}px ${this.text.fontFamily}`;
        //    this.text.ctxMeasure = ctx.measureText(this.text.text);
        //}

        //if (this.text.text.length >= 24) {
        //    this.text.text = this.text.text.substring(0, 24)
        //}
        //
        //if ((this.height / this.width * 750) / this.text.text.length > this.height - 10) {
        //    this.text.size = this.height - 20
        //}
        //else {
        //    this.text.size = ((this.height / this.width * 700) / this.text.text.length);
        //}
    }
    change(text, fontFamily) {
        this.text.text = text
        this.text.fontFamily = fontFamily
        this.text.size = fitText(text, this.desiredWidth, this.desiredHeight, fontFamily)
    }
    draw() {
        this.halfheight = this.height / 2
        this.halfwidth = this.width / 2
        this.pos = [this.x + this.halfwidth, this.y + this.halfheight]

        if (this.hitbox.collidepoint(mouse.pos)) {
            this.hover = true
            if (mouse.click && mouse.objectSelected == undefined && this.canClickDueTimeout) {
                this.click = true
                this.canClickDueTimeout = false
                let timeoutms = setTimeout(() => {
                    this.canClickDueTimeout = true
                    clearTimeout(timeoutms)
                }, this.timeout)
            }
            else {
                this.click = false
            }
        }
        else {
            this.hover = false
            this.click = false
        }

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        this.anglex = this.x + this.width / 2
        this.angley = this.y + this.halfheight
        ctx.save();
        ctx.translate(this.anglex, this.angley);
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;
        if (this.usingColor) {
            ctx.fillStyle = this.color
            ctx.fillRect(-this.halfwidth, -this.halfheight, this.width, this.height);
        }
        else {
            ctx.drawImage(this.image, -this.halfwidth, -this.halfheight, this.width, this.height);
        }
        ctx.restore();
        if (this.text.active) {
            ctx.fillStyle = this.text.color
            drawtext(this.text.text, [this.pos[0], this.pos[1]], this.text.size, this.text.fontFamily, this.text.baseline, this.text.align, this.angle, this.alpha)
        }
        ctx.fillStyle = "#000000"
    }
    changeImage(string) {
        string = string.split(":")
        if (string[0] == "color") {
            this.usingColor = true
            this.color = string[1]
        }
        else if (global.hasLoaded) {
            this.usingColor = false
            this.color = "#000000"
            this.image.src = loadImage(undefined,string[0]);
        }
        else {
            this.usingColor = false
            this.color = "#000000"
        }
    }
    grow(x, y) {
        this.x -= x / 2
        this.y -= y / 2
        this.width += x
        this.height += y
        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }
}
export class rect {
    constructor([x = 0, y = 0], [width = 32, height = 32], color = undefined) {
        if (typeof x != "number" || typeof y != "number" ||
            typeof width != "number" || typeof height != "number" ||
            width <= 0 || height <= 0) {
            global.error(11)
        }
        if (typeof color != "string") {
            this.color = `rgb(${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30})`;
        }
        else {
            this.color = color
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.hitbox = new hitbox(this, 0, undefined, 0, 0)
        this.alpha = 1.0
        this.angle = 0
        this.angley = 0
        this.anglex = 0
        this.halfheight = this.height / 2
        this.halfwidth = this.width / 2
    }
    draw() {
        this.pos = [this.x + this.halfwidth, this.y + this.halfheight]
        this.anglex = this.x + this.halfwidth
        this.angley = this.y + this.halfheight
        ctx.save();
        ctx.translate(this.anglex, this.angley);
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color
        ctx.fillRect(-this.halfwidth, -this.halfheight, this.width, this.height)
        ctx.restore();
    }
}
export class slider {
    constructor(background = "/source/icons/PizzaJS256x.png", thumb = "/source/icons/PizzaJS256x.png", [x = 0, y = 0], [width = 64, height = 16], thumbwidth = 16, [minpercentage = 0, maxpercentage = 100], sliderFill = "#00FF00", currentpercentage = 0) {
        var image1 = background.split(":")
        this.background = new Image()
        if (image1[0] == "color") {
            this.usingColor1 = true
            this.color1 = image1[1]
        }
        else {
            this.usingColor1 = false
            this.color1 = "#000000"
            this.background.src = loadImage(undefined,image1[0])
        }

        var image2 = thumb.split(":")
        this.thumb = new Image()
        if (image2[0] == "color") {
            this.usingColor2 = true
            this.color2 = image2[1]
        }
        else {
            this.usingColor2 = false
            this.color2 = "#000000"
            this.thumb.src = loadImage(undefined,image2[0])
        }

        this.thumbx = x
        this.thumby = y

        this.thumbheight = height

        this.maxpercentage = maxpercentage
        this.minpercentage = minpercentage
        this.percentage = currentpercentage

        if (thumbwidth > width / 2) {
            thumbwidth = height
            this.width = thumbwidth
            this.thumbwidth = width - thumbwidth
        }
        else {
            this.width = thumbwidth
            this.thumbwidth = width - thumbwidth
        }
        this.height = height


        if (this.percentage < this.minpercentage) {
            this.percentage = this.minpercentage
        }
        if (this.percentage > this.maxpercentage) {
            this.percentage = this.maxpercentage
        }
        this.x = this.thumbx + ((this.percentage - this.minpercentage) * this.thumbwidth / (this.maxpercentage - this.minpercentage)) + this.width;
        this.y = y

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
        this.thumbBlocked = false

        this.sliderBgColor = sliderFill
    }
    draw() {
        if (this.hitbox.collidepoint(mouse.pos) && !this.thumbBlocked) {
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
        if ((((this.drag.hitbox.collidepoint(mouse.pos) && mouse.click && mouse.objectSelected == undefined) || this.drag.active && mouse.objectSelected == this)) && !this.thumbBlocked) {
            if (!this.drag.hasSetOffset) {
                this.drag.hasSetOffset = true;
                mouse.objectSelected = this
                this.drag.offsetX = mouse.x - this.x;
                this.drag.offsetY = mouse.y - this.y;
            }
            this.drag.active = true
            this.x = mouse.x - this.drag.offsetX
            if (this.x >= this.thumbx + this.thumbwidth + this.width) {
                this.x = this.thumbx + this.thumbwidth + this.width
            }
            if (this.x <= this.thumbx + this.width) {
                this.x = this.thumbx + this.width
            }
            this.percentage = Math.round(-((this.thumbx + this.width - this.x) / this.thumbwidth) * (this.maxpercentage - this.minpercentage) + this.minpercentage);
            //this.percentage = -((this.thumbx + this.width - this.x) / this.thumbwidth) * (this.maxpercentage - this.minpercentage) + this.minpercentage;
        }
        else {
            this.drag.hasSetOffset = false;
            this.x = this.thumbx + ((this.percentage - this.minpercentage) * this.thumbwidth / (this.maxpercentage - this.minpercentage)) + this.width;
        }
        if (this.drag.active && !mouse.click) {
            this.drag.active = false
            mouse.objectSelected = undefined
        }

        this.pos = [this.x + this.width / 2, this.y + this.height / 2]

        this.left = this.x
        this.right = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height

        this.anglex = this.thumbx + this.thumbwidth / 2
        this.angley = this.thumby + this.thumbheight / 2
        ctx.save();
        ctx.translate(this.anglex, this.angley);
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;
        if (this.usingColor1) {
            ctx.fillStyle = this.color1
            ctx.fillRect(-this.thumbwidth / 2, -this.height / 2, this.thumbwidth + this.width, this.height)
        }
        else {
            ctx.drawImage(this.background, -this.thumbwidth / 2, -this.height / 2, this.thumbwidth + this.width, this.height);
        }

        ctx.fillStyle = this.sliderBgColor
        ctx.fillRect((-this.thumbwidth / 2), -this.height / 2, this.x - this.thumbx - this.width / 2, this.height)


        if (this.usingColor2) {
            ctx.fillStyle = this.color2
            ctx.fillRect((-this.thumbwidth / 2) + this.x - this.thumbx - this.width, -this.thumbheight / 2, this.width, this.thumbheight)
        }
        else {
            ctx.drawImage(this.thumb, (-this.thumbwidth / 2) + this.x - this.thumbx - this.width, -this.thumbheight / 2, this.width, this.thumbheight);
        }


        ctx.restore();
        ctx.fillStyle = "#000000"
    }
    changeImage(stringbackground, stringthumb) {
        stringbackground = stringbackground.split(":")
        if (stringbackground[0] == "color") {
            this.usingColor1 = true
            this.color1 = stringbackground[1]
        }
        else if (global.hasLoaded) {
            this.usingColor1 = false
            this.color1 = "#000000"
            this.background.src = loadImage(undefined,stringbackground[0]);
        }
        else {
            this.usingColor1 = false
            this.color1 = "#000000"
        }

        stringthumb = stringthumb.split(":")
        if (stringthumb[0] == "color") {
            this.usingColor2 = true
            this.color2 = stringthumb[1]
        }
        else if (global.hasLoaded) {
            this.usingColor2 = false
            this.color2 = "#000000"
            this.background.src = loadImage(undefined,stringthumb[0]);
        }
        else {
            this.usingColor2 = false
            this.color2 = "#000000"
        }
    }

}
export class sound {
    constructor(url, playbackRate = 1.0, volume = 1.0, loop = false) {
        this.sound = new Audio()
        this.sound.src = loadSound(url)
        this.sound.loop = loop
        this.loop = loop
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