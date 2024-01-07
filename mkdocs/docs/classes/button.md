| Parameters          | Type      | Description                                                        | Default Value  |
|---------------------|-----------|--------------------------------------------------------------------|----------------|
| string              | `string`  | Image URL or color code format.                                    | PizzaJS Logo   |
| [x, y]              | `number[]`| The top left position of the actor in pixels.                      | [0, 0]         |
| [width, height]     | `number[]`| The width and height of the actor in pixels.                       | [32, 32]       |
| text                | `string`  | The text of the button, if undefined it will be disabled.          | "Button"       |
| textColor           | `string`  | The color of the text                                              | "#FFFFFF"      |
| textMargin          | `number`  | The margin of the text                                             | 0              |
| timeoutMS           | `number`  | The time it takes for the button to be able to be pressed again .  | 0              |

## Attributes

| Attributes                | Description                                                       |
|---------------------------|-------------------------------------------------------------------|
| `image`                   | Holds the image object if an image source is provided.            |
| `usingColor`              | Indicates whether the actor is using a color instead of an image. |
| `color`                   | Holds the color value if the actor is using a color.              |
| `x, y`                    | Current position of the actor.                                    |
| `width, height`           | Dimensions of the actor.                                          |
| `halfwidth, halfheight`   | Half of the width and height of the actor.                        |
| `pos`                     | Position coordinates of the actor.                                |
| `desiredWidth, desiredHeight`        | The desired width and height for the text Formula: `width - margin` and `height - margin`    |
| `text`                    | Object for handling text functionality.                           |
| `drag`                    | Object for handling dragging functionality.                       |
| `click`                    | Boolean that indicates if its being clicked.                       |
| `hover`                    | Boolean that indicates if its being hovered.                     |
| `hitbox`                  | Hitbox object for collision detection.                            |
| `anglex, angley`          | Position coordinates used for angle calculations.                 |
| `angle`                   | Angle of rotation for the actor (in degrees).                     |
| `alpha`                   | Transparency of the actor.                                        |
| `radius`                  | The amount of rounding corners use array for changing independently each corner or a number to change all corners.                    |
| `stroke.active`           | A boolean flag indicating whether the stroke (outline) should be active or not.  |
| `stroke.color`           |  A string representing the color of the stroke in hexadecimal, RGB, or other supported formats.  |
| `stroke.width`           |  A numerical value representing the width of the stroke in pixels.  |
|`left, right, top, bottom` | Boundaries of the actor.                                          |
| `timeout`                   | The timeout in ms                                      |
| `canClickDueTimeout`                   | Boolean that stays true if it can be clicked if not it stays false                                        |
| `global.buttons`          | Adds the object to global.buttons for addons                       |    

## Methods

### draw()

The draw() method is responsible for rendering the button onto the canvas based on its current properties.

!!! Example
    ```js

    import * as pjs from "/source/modules/index.js"

    pjs.setup(1920, 1080, 1);

    let size = 256
    let x = pjs.canvas.width / 2 - size
    let y = pjs.canvas.height / 2 - size / 2

    let MyButton = new pjs.button("color: #000000", [x, y], [size * 2, size], "My Button", "#FFFFFF", size * 0.5, 500)

    window.addEventListener("pjsUpdate", () => {
        pjs.clear()
        MyButton.draw()

        // Change color if hovered
        //if (MyButton.hover) {
        //    MyButton.color = "#FF0000"
        //}
        //else {
        //    MyButton.color = "#000000"
        //}

        // Indicate when the button is able to be pressed again
        //if(MyButton.canClickDueTimeout){
        //    pjs.ctx.fillStyle = "#00FF00"
        //    pjs.drawtext("Can Click",[0,0],size*0.45)
        //}
        //else{
        //    pjs.ctx.fillStyle = "#FF0000"
        //    pjs.drawtext("Timeout",[0,0],size*0.45)
        //}

    })

    pjs.start()
    ```

    ![Image](./img/buttondraw.png)

### `change()`

The change() method changes the text and fits it to the button with a provided font and text

!!! failure
    change() uses fitext that doens't properly fit text in some cases.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| text              | `string`  | The text to be changed                   | -              |
| fontFamily              | `string`  | The fontFamily that is goind to be changed                  | -              |

!!! Example
    ```js
    import * as pjs from "/source/modules/index.js"

    pjs.setup(1920, 1080, 1);

    let size = 256
    let x = pjs.canvas.width / 2 - size
    let y = pjs.canvas.height / 2 - size / 2

    let MyButton = new pjs.button("color: #000000", [x, y], [size * 2, size], "My Button", "#FFFFFF", size * 0.5, 500);

    window.addEventListener("pjsUpdate", () => {
        pjs.clear()
        MyButton.draw()

        if (MyButton.click) {
            if (MyButton.text.text == "My Button") {
                MyButton.change("Super Button", "sans-serif")
            }
            else {
                MyButton.change("My Button", "sans-serif")
            }
        }

    })

    pjs.start()
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


