string = string.split(":")
if (string[0] == "color") {
    this.usingColor = true
    this.color = string[1]
}
else if (global.hasLoaded) {
    this.usingColor = false
    this.color = "#000000"
    this.image.src = loadImage(string[0]);
}
else {
    this.usingColor = false
    this.color = "#000000"
}