```js
new button(string, [x, y], [width, height],text, fontFamily, textColor, textMargin, timeoutMS)
```

| Parameters          | Type      | Description                                                        | Default Value  |
|---------------------|-----------|--------------------------------------------------------------------|----------------|
| string              | `string`  | Image URL or color code format.                                    |"color:#FFFFFF" |
| [x, y]              | `number[]`| The top left position of the button in pixels.                      | [0, 0]         |
| [width, height]     | `number[]`| The width and height of the button in pixels.                       | [64, 16]       |
| text                | `string`  | The text of the button, if undefined it will be disabled.          | "Button"       |
| fontFamily          | `string`  | The fontFamily for the button text.                                | "sans-serif"   |
| textColor           | `string`  | The color of the text                                              | "#FFFFFF"      |
| textMargin          | `number`  | The margin of the text                                             | 0              |
| timeoutMS           | `number`  | The time it takes for the button to be able to be pressed again .  | 0              |

## Attributes

| Attributes                    | Description                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| `image`                       | Holds the image object if an image source is provided.              |
| `usingColor`                  | Indicates whether the button is using a color instead of an image.            |
| `color`                       | Holds the color value if the button is using a color.        |
| `x, y`                        | Current position of the button.                                                 |
| `width, height`               | Dimensions of the button.                  |
| `halfwidth, halfheight`       | Half of the width and height of the button.            |
| `pos`                         | Position coordinates of the button in an array x: [0], y: [1].                   |
| `text`                        | Object for handling text functionality.      |
| `text.active`                 | A boolean flag indicating whether the text should be active/shown or not.     |
| `text.color`                  | Color of the text.                                                      |
| `text.text`                   | The current text of the button.                                  |
| `text.size`                   | The size in px of the text.                                 |
| `text.margin`                 | Margin for the text                                        |
| `text.fontFamily`             | The fontFamily                                            |
| `text.baseline`               | Baseline for text `"top"`, `"middle"`, `"bottom"`, or `"alphabetic"`.           |
| `text.align`                  | Text alignment: `"start"`, `"end"`, `"left"`, `"right"`, or `"center"`.         |
| `text.stroke.active`          | A boolean flag indicating whether the stroke (outline) should be active or not.            |
| `text.stroke.color`           | A string representing the color of the stroke in hexadecimal, RGB, or other supported formats.     |
| `text.stroke.width`           | A numerical value representing the width of the stroke in pixels.                 |
| `click`                       | Boolean that indicates if its being clicked.                                 |
| `hover`                       | Boolean that indicates if its being hovered.                                             |
| `hitbox`                      | Hitbox object for collision detection.                                                   |
| `anglex, angley`              | Position coordinates used for positioning calculations. Has nothing in common with angle !           |
| `angle`                       | Angle of rotation for the button (in degrees).                                               |
| `alpha`                       | Transparency of the button.                                                                     |
| `radius`                      | The amount of rounding corners use array for changing independently each corner or a number to change all corners. |
| `stroke.active`               | A boolean flag indicating whether the stroke (outline) should be active or not.     |
| `stroke.color`                | A string representing the color of the stroke in hexadecimal, RGB, or other supported formats.     |
| `stroke.width`                | A numerical value representing the width of the stroke in pixels.                           |
|`left, right, top, bottom`     | Boundaries of the button.                                                                    |
| `timeout`                     | The timeout object. When clicked it will activate and while active the click var will stay false.         |

## Methods

### `draw()`

The draw() method is responsible for rendering the button onto the canvas based on its current properties.

!!! Example
    ```js
    import { start, setup, clear, canvas, button, ctx, drawtext } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"

    setup(1920, 1080, 1);

    let size = 256
    let x = canvas.width / 2 - size
    let y = canvas.height / 2 - size / 2

    let MyButton = new button("color: #5a5a5a", [x, y], [size * 2, size], "My Button", "sans-serif", "#FFFFFF", size * 0.5, 500)

    window.addEventListener("pjsUpdate", () => {
        clear()
        MyButton.draw()
        // If MyButton is hovered it will change color
        //if (MyButton.hover) {
        //    MyButton.color = "#FF0000"
        //}
        //else {
        //    MyButton.color = "#5a5a5a"
        //}

        // If MyButton is clicked it will say Timeout and when its ready to click again is gonna say Can Click
        //if(!MyButton.timeout.active){
        //    ctx.fillStyle = "#00FF00"
        //    drawtext("Can Click",[0,0],size*0.3)
        //}
        //else{
        //    ctx.fillStyle = "#FF0000"
        //    drawtext("Timeout",[0,0],size*0.3)
        //}
    })

    start()
    ```

    ![Image](./img/buttondraw.png)

### `setText()`

The setText() method changes the text and fits it to the button with a provided font and text

!!! failure
    setText() uses fitext that doens't properly fit text with some fonts.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| text                | `string`  | The text to be changed                            | -              |
| fontFamily          | `string`  | The fontFamily that is goind to be changed        | -              |

!!! Example
    ```js
    import { start, setup, clear, canvas, button, ctx, drawtext } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"

    setup(1920, 1080, 1);

    let size = 256
    let x = canvas.width / 2 - size
    let y = canvas.height / 2 - size / 2

    let MyButton = new button("color: #5a5a5a", [x, y], [size * 2, size], "My Button", "sans-serif", "#FFFFFF", size * 0.5, 500)

    window.addEventListener("pjsUpdate", () => {
        clear()
        MyButton.draw()
        if (MyButton.click) {
            if (MyButton.text.text == "My Button") {
                MyButton.setText("Super Button", "sans-serif")
            }
            else {
                MyButton.setText("My Button", "sans-serif")
            }
        }   
    })

    start()
    ```

    ![Image](./img/buttondraw.png)

    ![Image](./img/buttonchange.png)


### `changeImage(string)`

Changes the image/color of the button.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| string              | `string`  | Image URL or color code format.                   | -              |

### `grow(x, y)`

Increases or decreases the size of the button.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| x                   | `number`  | Amount by which to increase width                 | -              |
| y                   | `number`  | Amount by which to increase height                | -              |


