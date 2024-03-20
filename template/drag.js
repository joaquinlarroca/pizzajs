//~ Basic Constructor
this.drag = {
    hitbox: new hitbox(this, 0, undefined, this.offsetX, this.offsetY),
    active: false,
    hasSetOffset: false,
    offsetX: 0,
    offsetY: 0,
}
//! this.offsetX !== this.drag.offsetX

//~  Update Method
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
else {
    this.drag.active = false
}