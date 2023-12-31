if (this.hitbox.collidepoint(mouse.pos)) {
    this.hover = true
    if (mouse.click && mouse.objectSelected == undefined) {
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