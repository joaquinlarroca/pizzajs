![PizzaJS Logo](./source/icons/pizzaJS.png)
# Pizza JS
Built for basic games or little projects using HTML Canvas 2D
## Create a Hello World window
```javascript
setup(600,600,.9) // Sets the canvas to 600x600.
// If you dont want the canvas to stick to any side of the screen add any float to reduce the size but maintaining the size 

function update(){
    clear() // Clear the previous frame
    ctx.fillStyle = "#FFFFFF" // Sets the color to white
    drawtext("Hello World",[300,300],36,"sans-serif","middle","center") // Draws Hello World at the middle of 300,300 with font sans-serif size 36
}

start() // Starts the main loop "update()" 
```
