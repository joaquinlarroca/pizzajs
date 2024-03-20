import { canvas, setup, start, clear, button, slider, global } from "/source/modules/index.js"
setup(454, 454, 0.9);
canvas.style.backgroundColor = "#FFF"

new button("color:red", [0, 0], [64, 64], "FIT", "sans-serif", "#000", 0)
new button("color:red", [65, 0], [64, 64], "FONT", "sans-serif", "#000", 0)
new button("color:red", [130, 0], [64, 64], "TEST", "sans-serif", "#000", 0)

let RSlider = new slider("color:#000", "color:#3E3E3E", [0, 65], [64, 32], 16, [0, 255], "#555555", 255)

let GSlider = new slider("color:#000", "color:#3E3E3E", [65, 65], [64, 32], 16, [0, 255], "#555555", 69)

let BSlider = new slider("color:#000", "color:#3E3E3E", [130, 65], [64, 32], 16, [0, 255], "#555555", 0)

let rgbdisplay = new button("color:red", [0, 98], [194, 31], "TEST", "sans-serif", "#000", 16)

let setText = new button("color:red", [195, 65], [129, 64], "SET TEXT", "sans-serif", "#000", 16, 5000)

let currentText = "SET TEXT"

let arraySlider = new slider("color:#000", "color:#3E3E3E", [195, 0], [129, 64], 16, [0, 64], "#555555", 0)

let arraySliderDisplay = new button("color:red", [325, 0], [129, 129], "0", "sans-serif", "#000", 64)

new button("color:red", [0, 130], [64, 64], "Arial", "Arial", "#000", 0)
new button("color:red", [65, 130], [64, 64], "System", "System", "#000", 0)
new button("color:red", [130, 130], [64, 64], "Verdana", "Verdana", "#000", 0)
new button("color:red", [195, 130], [64, 64], "Tahoma", "Tahoma", "#000", 0)
new button("color:red", [260, 130], [64, 64], "Courier New", "Courier New", "#000", 0)
new button("color:red", [325, 130], [64, 64], "Brush Script MT", "Brush Script MT", "#000", 0)
new button("color:red", [390, 130], [64, 64], "sans-serif", "sans-serif", "#000", 0)

let array1 = [
    new button("color:red", [0, 195], [64, 64], "0", "Arial", "#000", 0),
    new button("color:red", [65, 195], [64, 64], "0", "System", "#000", 0),
    new button("color:red", [130, 195], [64, 64], "0", "Verdana", "#000", 0),
    new button("color:red", [195, 195], [64, 64], "0", "Tahoma", "#000", 0),
    new button("color:red", [260, 195], [64, 64], "0", "Courier New", "#000", 0),
    new button("color:red", [325, 195], [64, 64], "0", "Brush Script MT", "#000", 0),
    new button("color:red", [390, 195], [64, 64], "0", "sans-serif", "#000", 0)
]

let array2 = [
    new button("color:red", [0, 260], [64, 64], "FITFONT", "Arial", "#000", 0),
    new button("color:red", [65, 260], [64, 64], "FITFONT", "System", "#000", 0),
    new button("color:red", [130, 260], [64, 64], "FITFONT", "Verdana", "#000", 0),
    new button("color:red", [195, 260], [64, 64], "FITFONT", "Tahoma", "#000", 0),
    new button("color:red", [260, 260], [64, 64], "FITFONT", "Courier New", "#000", 0),
    new button("color:red", [325, 260], [64, 64], "FITFONT", "Brush Script MT", "#000", 0),
    new button("color:red", [390, 260], [64, 64], "FITFONT", "sans-serif", "#000", 0)
]

let array3 = [
    new button("color:red", [0, 325], [64, 64], "TEST", "Arial", "#000", 0),
    new button("color:red", [65, 325], [64, 64], "TEST", "System", "#000", 0),
    new button("color:red", [130, 325], [64, 64], "TEST", "Verdana", "#000", 0),
    new button("color:red", [195, 325], [64, 64], "TEST", "Tahoma", "#000", 0),
    new button("color:red", [260, 325], [64, 64], "TEST", "Courier New", "#000", 0),
    new button("color:red", [325, 325], [64, 64], "TEST", "Brush Script MT", "#000", 0),
    new button("color:red", [390, 325], [64, 64], "TEST", "sans-serif", "#000", 0)
]

let array4 = [
    new button("color:red", [0, 390], [64, 64], "set text", "Arial", "#000", 0),
    new button("color:red", [65, 390], [64, 64], "set text", "System", "#000", 0),
    new button("color:red", [130, 390], [64, 64], "set text", "Verdana", "#000", 0),
    new button("color:red", [195, 390], [64, 64], "set text", "Tahoma", "#000", 0),
    new button("color:red", [260, 390], [64, 64], "set text", "Courier New", "#000", 0),
    new button("color:red", [325, 390], [64, 64], "set text", "Brush Script MT", "#000", 0),
    new button("color:red", [390, 390], [64, 64], "set text", "sans-serif", "#000", 0)
]

window.addEventListener("pjsUpdate", (e) => {
    clear()
    arraySliderDisplay.text.text = arraySlider.percentage
    rgbdisplay.text.text = `rgb(${RSlider.percentage},${GSlider.percentage},${BSlider.percentage})`
    if (setText.click) {
        currentText = prompt("Set Text: ")
    }
    if (setText.timeout.active) {
        setText.text.text = Math.round(setText.timeout.timeLeft / 100) / 10
    }
    else {
        setText.text.text = "SET TEXT"
    }
    array1.forEach(button => {
        button.text.margin = arraySlider.percentage
        button.setText(button.text.text, button.text.fontFamily)
    });
    array2.forEach(button => {
        button.text.margin = arraySlider.percentage
        button.setText(button.text.text, button.text.fontFamily)
    });
    array3.forEach(button => {
        button.text.margin = arraySlider.percentage
        button.setText(button.text.text, button.text.fontFamily)
    });
    array4.forEach(button => {
        button.text.margin = arraySlider.percentage
        button.setText(currentText, button.text.fontFamily)
    });
    global.all.forEach(button => {
        button.draw()
        button.color = `rgb(${RSlider.percentage},${GSlider.percentage},${BSlider.percentage})`
    });
})

start()