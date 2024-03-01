import { canvas, ctx, drawtext, loadImage, loadSound, fitText } from "./functions.js";
import { mouse } from "./listener.js"
import { global } from './global.js'
export class hitbox {
    constructor(that, multiplier = 0, color = undefined, offsetX = 0, offsetY = 0) {
        this.that = that
        if (typeof this.that.x != "number" || typeof this.that.y != "number" ||
            typeof this.that.width != "number" || typeof this.that.height != "number" ||
            this.that.width <= 0 || this.that.height <= 0 || typeof offsetX != "number" || typeof offsetY != "number") {
            global.error("c", 1);
        }
        if (typeof multiplier != "number" || multiplier < 0 || multiplier > 1) {
            global.error("c", 2);
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
            global.error("c", 1);
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
export class hitboxCircle {
    constructor(x, y, radius) {
        if (typeof x != "number" || typeof y != "number") {
            global.error("c", 4);
        }
        else if (typeof radius != "number" || radius <= 0) {
            global.error("c", 17);
        }
        else {
            this.x = x
            this.y = y
            this.radius = radius
            this.lineWidth = (global.setupWidth + global.setupHeight) / 750
            this.color = `rgb(${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30})`
        }

    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.color
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.radius, this.y);
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke()
        ctx.restore();
    }
    collide(hitbox) {
        hitbox.updateDimensions()
        const dx = this.x - Math.max(hitbox.left, Math.min(this.x, hitbox.right))
        const dy = this.y - Math.max(hitbox.top, Math.min(this.y, hitbox.bottom))
        return Math.sqrt(dx ** 2 + dy ** 2) <= this.radius
    }
    collide2(hitbox) {
        hitbox.updateDimensions()
        const dx = this.x - Math.max(hitbox.left, Math.min(this.x, hitbox.right))
        const dy = this.y - Math.max(hitbox.top, Math.min(this.y, hitbox.bottom))
        return Math.sqrt(dx ** 2 + dy ** 2) <= this.radius
    }
    collideCircle(hitbox) {
        const distance = Math.sqrt((hitbox.x - this.x) ** 2 + (hitbox.y - this.y) ** 2);
        return distance <= this.radius + hitbox.radius;
    }
    collidepoint(point) {
        const distance = Math.sqrt((this.x - point[0]) ** 2 + (this.y - point[1]) ** 2);
        return distance <= this.radius;
    }
}
export class actor {
    constructor(string = "color:#FFFFFF", [x = 0, y = 0], [width = 32, height = 32], [offsetX = 0, offsetY = 0]) {
        if (typeof width != "number" || width <= 0 || typeof height != "number" || height <= 0) {
            global.error("c", 3);
        }
        else if (typeof x != "number" || typeof y != "number") {
            global.error("c", 4);
        }
        else if (typeof offsetX != "number" || typeof offsetY != "number") {
            global.error("c", 5);
        }
        else {
            global.all.push(this)
            global.actors.push(this)
            string = string.split(":")
            this.image = new Image()
            if (string[0] == "color") {
                this.usingColor = true
                this.color = string[1]
            }
            else {
                this.usingColor = false
                this.image.src = loadImage(undefined, string[0])
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
            this.scale = [1, 1]
            this.drag = {
                hitbox: new hitbox(this, 0, undefined, this.offsetX, this.offsetY),
                active: false,
                hasSetOffset: false,
                offsetX: 0,
                offsetY: 0,
            }
            this.hitbox = new hitbox(this, 0, undefined, this.offsetX, this.offsetY)

            this.pos = [this.x + this.width / 2, this.y + this.height / 2]

            this.anglex = this.x + this.width / 2
            this.angley = this.y + this.height / 2
            this.angle = 0

            this.alpha = 1

            this.left = this.x
            this.right = this.x + this.width
            this.top = this.y
            this.bottom = this.y + this.height

            this.radius = 0
            this.stroke = {
                active: false,
                color: "#FFFFFF",
                width: 5
            }
        }
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
            }
            if (this.x + this.width + this.offsetX > canvas.width) {
                this.x = canvas.width - this.width - this.offsetX
            }
            if (this.y + this.offsetY < 0) {
                this.y = -this.offsetY
            }
            if (this.y + this.height + this.offsetY > canvas.height) {
                this.y = canvas.height - this.height - this.offsetY
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
        if (this.radius < 0) {
            this.radius = 0
        }
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.scale(this.scale[0], this.scale[1]);
        ctx.globalAlpha = this.alpha;
        if (this.usingColor) {
            ctx.fillStyle = this.color
            ctx.beginPath();
            ctx.roundRect(-this.halfwidth + this.offsetX, -this.halfheight + this.offsetY, this.width, this.height, this.radius);
            if (this.stroke.active) {
                ctx.strokeStyle = this.stroke.color;
                ctx.lineWidth = this.stroke.width;
                ctx.stroke();
            }
            ctx.closePath()
            ctx.fill();
        }
        else {
            ctx.fillStyle = "rgba(0,0,0,0)"
            ctx.beginPath();
            ctx.roundRect(-this.halfwidth + this.offsetX, -this.halfheight + this.offsetY, this.width, this.height, this.radius);
            if (this.stroke.active) {
                ctx.strokeStyle = this.stroke.color;
                ctx.lineWidth = this.stroke.width;
                ctx.stroke();
            }
            ctx.closePath()
            ctx.clip()
            ctx.drawImage(this.image, -this.halfwidth + this.offsetX, -this.halfheight + this.offsetY, this.width, this.height);
            ctx.fill();
        };
        ctx.restore();
    }
    drawAnchorPoint() {
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
        this.halfwidth = this.width / 2
        this.halfheight = this.height / 2
        this.angle = Math.atan2(point[1] - this.y + this.halfheight, point[0] - this.x + this.halfwidth) * (180 / Math.PI)
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
            this.image.src = loadImage(undefined, string[0]);
        }
        else {
            this.usingColor = false
            this.color = "#000000"
        }
    }
    move(steps) {
        const angleRad = (this.angle * Math.PI) / 180
        const deltaX = Math.cos(angleRad) * steps
        const deltaY = Math.sin(angleRad) * steps
        this.x += deltaX;
        this.y += deltaY;
    }
    flip(axis) {
        if (axis === 'horizontal' || axis == "h" || axis == "x") {
            this.scale[0] *= -1; // Flip horizontally
        } else if (axis === 'vertical' || axis == "v" || axis == "y") {
            this.scale[1] *= -1; // Flip vertically
        } else {
            global.error("c", 16);
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
    constructor(string = "color:#FFFFFF", [x = 0, y = 0], [width = 64, height = 16], text = "Button", fontFamily = "sans-serif", textColor = "#ffffff", textMargin = 0, timeoutMS = 0) {
        if (typeof width != "number" || width <= 0 || typeof height != "number" || height <= 0) {
            global.error("c", 3);
        }
        else if (typeof x != "number" || typeof y != "number") {
            global.error("c", 4);
        }
        else if (typeof text != "string" && typeof text != "number") {
            global.error("c", 6);
        }
        else if (typeof textMargin != "number") {
            global.error("c", 7);
        }
        else if (typeof timeoutMS != "number") {
            global.error("c", 8);
        }
        else {
            global.all.push(this)
            global.buttons.push(this)
            string = string.split(":")
            this.image = new Image()
            if (string[0] == "color") {
                this.usingColor = true
                this.color = string[1]
            }
            else {
                this.usingColor = false
                this.color = "#000000"
                this.image.src = loadImage(undefined, string[0])
            }
            if (string[0] == "bypass.img") {
                this.image.src = "/source/images/bypass.png"
            }

            this.x = x
            this.y = y
            this.width = width
            this.height = height

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
                size: fitText(text, width - textMargin, height - textMargin, fontFamily),
                margin: textMargin,
                fontFamily: fontFamily,
                baseline: "middle",
                baselinePos: 0,
                align: "center",
                alignPos: 0,
                margin: textMargin,
                stroke: {
                    active: false,
                    color: "#FFFFFF",
                    width: 5
                }
            }
            this.timeout = new timeout(timeoutMS)
            this.stroke = {
                active: false,
                color: "#FFFFFF",
                width: 5
            }
            this.radius = 0
        }
    }
    setText(text, fontFamily) {
        this.text.text = text
        this.text.fontFamily = fontFamily
        this.text.size = fitText(text, this.width - this.text.margin, this.height - this.text.margin, fontFamily)
    }
    draw() {
        this.halfheight = this.height / 2
        this.halfwidth = this.width / 2
        this.pos = [this.x + this.halfwidth, this.y + this.halfheight]
        if (this.hitbox.collidepoint(mouse.pos)) {
            this.hover = true
            if (mouse.click && mouse.objectSelected == undefined && !this.timeout.active) {
                this.click = true
                this.timeout.start()
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
        if (this.radius < 0) {
            this.radius = 0
        }
        if (this.usingColor) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.roundRect(-this.halfwidth, -this.halfheight, this.width, this.height, this.radius);
            if (this.stroke.active) {
                ctx.strokeStyle = this.stroke.color;
                ctx.lineWidth = this.stroke.width
                ctx.stroke();
            }
            ctx.closePath()
            ctx.fill();
        }
        else {
            ctx.fillStyle = "rgba(0,0,0,0)"
            ctx.beginPath();
            ctx.roundRect(-this.halfwidth, -this.halfheight, this.width, this.height, this.radius);
            if (this.stroke.active) {
                ctx.strokeStyle = this.stroke.color;
                ctx.lineWidth = this.stroke.width;
                ctx.stroke();
            }
            ctx.closePath()
            ctx.clip()
            ctx.drawImage(this.image, -this.halfwidth, -this.halfheight, this.width, this.height);
            ctx.fill();
        }
        ctx.restore();
        ctx.save()
        if (this.text.active) {
            ctx.fillStyle = this.text.color;
            ctx.beginPath();
            switch (this.text.align) {
                case "left":
                    this.text.alignPos = this.x
                    break;
                case "right":
                    this.text.alignPos = this.x + this.width
                    break;
                case "center":
                    this.text.alignPos = this.pos[0]
                    break;
                default:
                    this.text.alignPos = this.pos[0]
                    break;
            }
            switch (this.text.baseline) {
                case "top":
                    this.text.baselinePos = this.y
                    break;
                case "middle":
                    this.text.baselinePos = this.pos[1]
                    break;
                case "bottom":
                    this.text.baselinePos = this.y + this.height
                    break;
                default:
                    this.text.baselinePos = this.pos[1]
                    break;
            }
            drawtext(this.text.text, [this.text.alignPos, this.text.baselinePos], this.text.size, this.text.fontFamily, this.text.baseline, this.text.align, this.angle, this.alpha)
            if (this.text.stroke.active) {
                ctx.strokeStyle = this.text.stroke.color;
                ctx.lineWidth = this.text.stroke.width;
                ctx.textBaseline = this.text.baseline;
                ctx.textAlign = this.text.align;
                ctx.font = `${this.text.size}px ${this.text.fontFamily}`;
                ctx.strokeText(this.text.text, this.text.alignPos, this.text.baselinePos);
            }
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();
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
            this.image.src = loadImage(undefined, string[0]);
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
            global.error("c", 1);
        }
        if (typeof color != "string") {
            this.color = `rgb(${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30},${Math.round(Math.random() * 225) + 30})`;
        }
        else {
            global.all.push(this)
            global.rects.push(this)
            this.color = color
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
            this.radius = 0
            this.stroke = {
                active: false,
                color: "#FFFFFF",
                width: 5
            }
        }
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
        ctx.beginPath();
        ctx.roundRect(-this.halfwidth, -this.halfheight, this.width, this.height, this.radius);
        if (this.stroke.active) {
            ctx.strokeStyle = this.stroke.color;
            ctx.lineWidth = this.stroke.width;
            ctx.stroke();
        }
        ctx.closePath()
        ctx.fill();
        ctx.restore();
    }
}
export class slider {
    constructor(background = "color: #FF0000", thumb = "color: #aeaeae", [x = 0, y = 0], [width = 64, height = 16], thumbwidth = 16, [minpercentage = 0, maxpercentage = 100], sliderFill = "#00FF00", currentpercentage = 0) {
        if (typeof width != "number" || width <= 0 || typeof height != "number" || height <= 0) {
            global.error("c", 3);
        }
        else if (typeof thumbwidth != "number" || thumbwidth <= 0) {
            global.error("c", 9);
        }
        else if (typeof minpercentage != "number" || typeof maxpercentage != "number" || typeof currentpercentage != "number") {
            global.error("c", 10);
        }
        else if (currentpercentage < minpercentage || currentpercentage > maxpercentage) {
            global.error("c", 11);
        }
        else {
            global.all.push(this)
            global.sliders.push(this)
            this.thumb = {
                image: undefined,
                x: x,
                y: y,
                height: height,
                width: 0, // Defined later on code
                blocked: false,
                usingColor: false,
                color: "#000000",
                radius: 0,
                stroke: {
                    active: false,
                    color: "#FFFFFF",
                    width: 5
                }
            }
            var image1 = background.split(":")
            this.background = new Image()
            if (image1[0] == "color") {
                this.BGusingColor = true
                this.BGcolor = image1[1]
            }
            else {
                this.BGusingColor = false
                this.BGcolor = "#000000"
                this.background.src = loadImage(undefined, image1[0])
            }

            var image2 = thumb.split(":")
            this.thumb.image = new Image()
            if (image2[0] == "color") {
                this.thumb.usingColor = true
                this.thumb.color = image2[1]
            }
            else {
                this.thumb.image.src = loadImage(undefined, image2[0])
            }
            this.maxpercentage = maxpercentage
            this.minpercentage = minpercentage
            this.percentage = currentpercentage

            if (thumbwidth > width / 2) {
                thumbwidth = height
                this.width = thumbwidth
                this.thumb.width = width - thumbwidth
            }
            else {
                this.width = thumbwidth
                this.thumb.width = width - thumbwidth
            }
            this.height = height


            if (this.percentage < this.minpercentage) {
                this.percentage = this.minpercentage
            }
            if (this.percentage > this.maxpercentage) {
                this.percentage = this.maxpercentage
            }
            this.x = this.thumb.x + ((this.percentage - this.minpercentage) * this.thumb.width / (this.maxpercentage - this.minpercentage)) + this.width;
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

            this.sliderBgColor = sliderFill

            this.radius = 0
            this.stroke = {
                active: false,
                color: "#FFFFFF",
                width: 5
            }
        }
    }
    draw() {
        if (this.hitbox.collidepoint(mouse.pos) && !this.thumb.blocked) {
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
        if ((((this.drag.hitbox.collidepoint(mouse.pos) && mouse.click && mouse.objectSelected == undefined) || this.drag.active && mouse.objectSelected == this)) && !this.thumb.blocked) {
            if (!this.drag.hasSetOffset) {
                this.drag.hasSetOffset = true;
                mouse.objectSelected = this
                this.drag.offsetX = mouse.x - this.x;
                this.drag.offsetY = mouse.y - this.y;
            }
            this.drag.active = true
            this.x = mouse.x - this.drag.offsetX
            if (this.x >= this.thumb.x + this.thumb.width + this.width) {
                this.x = this.thumb.x + this.thumb.width + this.width
            }
            if (this.x <= this.thumb.x + this.width) {
                this.x = this.thumb.x + this.width
            }
            this.percentage = Math.round(-((this.thumb.x + this.width - this.x) / this.thumb.width) * (this.maxpercentage - this.minpercentage) + this.minpercentage);
            //this.percentage = -((this.thumbx + this.width - this.x) / this.thumbwidth) * (this.maxpercentage - this.minpercentage) + this.minpercentage;
        }
        else {
            this.drag.hasSetOffset = false;
            this.x = this.thumb.x + ((this.percentage - this.minpercentage) * this.thumb.width / (this.maxpercentage - this.minpercentage)) + this.width;
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

        this.anglex = this.thumb.x + this.thumb.width / 2
        this.angley = this.thumb.y + this.thumb.height / 2
        ctx.save();
        ctx.translate(this.anglex, this.angley);
        ctx.rotate(0.017453292519943295 * this.angle);
        ctx.globalAlpha = this.alpha;

        if (this.BGusingColor) {
            ctx.fillStyle = this.color1
            ctx.beginPath();
            ctx.roundRect(-this.thumb.width / 2, -this.height / 2, this.thumb.width + this.width, this.height, this.radius);
            if (this.stroke.active) {
                ctx.strokeStyle = this.stroke.color;
                ctx.lineWidth = this.stroke.width
                ctx.stroke();
            }
            ctx.closePath()
            ctx.clip()
            ctx.fill();
        }
        else {
            ctx.fillStyle = "rgba(0,0,0,0)"
            ctx.beginPath();
            ctx.roundRect(-this.thumb.width / 2, -this.height / 2, this.thumb.width + this.width, this.height, this.radius);
            if (this.stroke.active) {
                ctx.strokeStyle = this.stroke.color;
                ctx.lineWidth = this.stroke.width;
                ctx.stroke();
            }
            ctx.closePath()
            ctx.clip()
            ctx.drawImage(this.background, -this.thumb.width / 2, -this.height / 2, this.thumb.width + this.width, this.height);
            ctx.fill();
        }

        ctx.fillStyle = this.sliderBgColor
        ctx.fillRect((-this.thumb.width / 2), -this.height / 2, this.x - this.thumb.x - this.width / 2, this.height)


        if (this.thumb.usingColor) {
            ctx.fillStyle = this.thumb.color
            ctx.beginPath();
            ctx.roundRect((-this.thumb.width / 2) + this.x - this.thumb.x - this.width, -this.thumb.height / 2, this.width, this.thumb.height, this.thumb.radius);
            if (this.thumb.stroke.active) {
                ctx.strokeStyle = this.thumb.stroke.color;
                ctx.lineWidth = this.thumb.stroke.width
                ctx.stroke();
            }
            ctx.closePath()
            ctx.fill();
        }
        else {
            ctx.fillStyle = "rgba(0,0,0,0)"
            ctx.beginPath();
            ctx.roundRect((-this.thumb.width / 2) + this.x - this.thumb.x - this.width, -this.thumb.height / 2, this.width, this.thumb.height, this.thumb.radius);
            if (this.thumb.stroke.active) {
                ctx.strokeStyle = this.thumb.stroke.color;
                ctx.lineWidth = this.thumb.stroke.width
                ctx.stroke();
            }
            ctx.clip()
            ctx.closePath()
            ctx.drawImage(this.thumb.image, (-this.thumb.width / 2) + this.x - this.thumb.x - this.width, -this.thumb.height / 2, this.width, this.thumb.height);
            ctx.fill();
        }


        ctx.restore();
        ctx.fillStyle = "#000000"
    }
    changeImage(stringbackground, stringthumb) {
        stringbackground = stringbackground.split(":")
        if (stringbackground[0] == "color") {
            this.BGusingColor = true
            this.color1 = stringbackground[1]
        }
        else if (global.hasLoaded) {
            this.BGusingColor = false
            this.color1 = "#000000"
            this.background.src = loadImage(undefined, stringbackground[0]);
        }
        else {
            this.BGusingColor = false
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
            this.thumb.image.src = loadImage(undefined, stringthumb[0]);
        }
        else {
            this.usingColor2 = false
            this.color2 = "#000000"
        }
    }
}
export class timeout {
    constructor(timeMS = 1000) {
        if (typeof timeMS !== "number") {
            global.error("c", 8);
        }
        else {
            this.time = timeMS;
            this.active = false;
            this.currentTime = 0;
            this.timeLeft = 0
            this.timeElapsed = 0;
            this.updateTime = 75
        }
    }
    start() {
        if (!this.active) {
            this.active = true;
            this.currentTime = Date.now();
            const timeout = setTimeout(() => {
                this.active = false;
                this.currentTime = 0;
                this.timeElapsed = 0;
                this.timeLeft = 0;
                clearTimeout(timeout);
            }, this.time);
            const updateTimeout = () => {
                if (this.active) {
                    this.timeElapsed = Date.now() - this.currentTime;
                    this.timeLeft = this.time - this.timeElapsed
                    setTimeout(updateTimeout, this.updateTime);
                }
            };
            updateTimeout();
        }
    }
}
export class sound {
    constructor(url, playbackRate = 1.0, volume = 1.0, loop = false) {
        if (typeof playbackRate != "number") {
            global.error("c", 12);
        }
        else if (typeof volume != "number" || volume < 0 || volume > 1) {
            global.error("c", 13);
        }
        else if (typeof loop != "boolean") {
            global.error("c", 14);
        }
        else {
            global.sounds.push(this)
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
        if (!this.sound.paused) {
            this.sound.pause()
        }
        this.sound.currentTime = 0
    }
    setCurrentTime(seconds) {
        if (seconds >= 0 && seconds <= this.sound.duration) {
            this.currentTime = seconds;
            this.sound.currentTime = seconds;
        }
        else {
            global.error("c", 15);
        }
    }
} 