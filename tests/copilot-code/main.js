import { start, setup, ctx, clear, canvas, time, drawtext } from "/source/modules/index.js"
// Setup the canvas with specific width and height
setup(1920, 1080, 1, true);

// Calculate the middle of the canvas
let x = canvas.width / 2;
let y = canvas.height / 2;

// Define the text properties
let text = {
    content: "Hello, world!",
    fontSize: 64,
    fontFamily: "sans-serif",
    baseline: "middle",
    textAlign: "center",
    angle: 0,
    alpha: 1
};

// Add an event listener for the 'pjsUpdate' event
window.addEventListener("pjsUpdate", (e) => {
    // Clear the canvas
    clear();

    // Rotate the text
    text.angle += time.delta * 10;

    // Set the fill color to white
    ctx.fillStyle = "#FFF"

    // Draw the text
    drawtext(text.content, [x, y], text.fontSize, text.fontFamily, text.baseline, text.textAlign, text.angle, text.alpha);
});

// Start the main loop
start();