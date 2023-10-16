setup(600,600,.9) // Sets the canvas to 600x600. If you dont want the canvas to stick to any side of the screen add any float to reduce the size but maintaining the size 

function update(){
    clear() // Clear the previous frame
    ctx.fillStyle = "#FFFFFF" // Sets the color to white
    drawtext("Hello World",[300,300],36,"sans-serif","middle","center") // Draws Hello World
}

start() // Starts the main loop "update()" 