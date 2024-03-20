
```js
new actor(string, [x, y], [width, height], [offsetX, offsetY])
```

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| string              | `string`  | Image URL or color code format.                   | "color: #FFFFFF"   |
| [x, y]              | `number[]`| The top left position of the actor in pixels.     | [0, 0]         |
| [width, height]     | `number[]`| The width and height of the actor in pixels.      | [32, 32]       |
| [offsetX, offsetY]  | `number[]`| The offsets used for positioning the actor.       | [0, 0]         |

## Attributes

| Attributes                | Description                                                       |
|---------------------------|-------------------------------------------------------------------|
| `image`                   | Holds the image object if an image source is provided.            |
| `usingColor`              | Indicates whether the actor is using a color instead of an image. |
| `color`                   | Holds the color value if the actor is using a color.              |
| `conditions`              | Object holding various conditions for the actor.                  |
| `conditions.canExitCanvas`| Tells wether the actor can leave the canvas or not. default: true |
| `conditions.isDraggable`  | Whether you can drag it or not. default: false                    |
| `scale`                   | The scale of the actor in an array x: [0], y: [1].                |
| `x, y`                    | Current position of the actor.                                    |
| `offsetX, offsetY`        | Offsets used for positioning.                                     |
| `drag`                    | Object for handling dragging functionality. More info at `template/drag` in github. |
| `hitbox`                  | Hitbox object for collision detection.                            |
| `width, height`           | Dimensions of the actor.                                          |
| `halfwidth, halfheight`   | Half of the width and height of the actor.                        |
| `pos`                     | Position coordinates of the actor in an array x: [0], y: [1].     |
| `anglex, angley`          | Position coordinates used for positioning calculations. Has nothing in common with angle ! |
| `angle`                   | Angle of rotation for the actor (in degrees).                     |
| `alpha`                   | Transparency of the actor.                                        |
| `radius`                  | The amount of rounding corners use array for changing independently each corner or a number to change all corners.                    |
| `stroke.active`           | A boolean flag indicating whether the stroke (outline) should be active or not.  |
| `stroke.color`           |  A string representing the color of the stroke in hexadecimal, RGB, or other supported formats.  |
| `stroke.width`           |  A numerical value representing the width of the stroke in pixels.  |
|`left, right, top, bottom` | Boundaries of the actor.                                          |

## Methods

### draw()

The draw() method is responsible for rendering the actor onto the canvas based on its current properties.

!!! Example
    ```js

    import { start, setup, clear, canvas, actor } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"

    setup(1920, 1080, 1);

    let size = 256
    let x = canvas.width / 2 - size/2
    let y = canvas.height / 2 - size/2

    let actor1 = new actor("/source/images/bunny.png", [x, y], [size, size], [0, 0])

    window.addEventListener("pjsUpdate", () => {
        clear()
        actor1.draw()
    })

    start()
    ```

    ![Image](./img/actor-draw.png)

### `drawAnchorPoint()`

The drawAnchorPoint() method renders an anchor point for the actor on the canvas. (anchor point is from where the actor rotates)

!!! TIP
    Anchor Point can be offseted with offsetX, offsetY

!!! Example
    ```js
    import { start, setup, clear, canvas, actor } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"

    setup(1920, 1080, 1);

    let size = 256
    let x = canvas.width / 2 - size/2
    let y = canvas.height / 2 - size/2

    let actor1 = new actor("/source/images/bunny.png", [x, y], [size, size], [0, 0])

    window.addEventListener("pjsUpdate", () => {
        clear()
        actor1.draw()
        actor1.drawAnchorPoint()
    })

    start()
    ```

    ![Image](./img/actor-anchor.png)

### `angletopoint(point)`

The method determines the angle between the actor's current position and the specified target point and makes the actor angle toward the point, considering the actor's center as the reference for now until the offset is added in.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| point               | `number[]`| The pos of the point                              | -              |

### `changeImage(string)`

Changes the image/color of the actor.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| string              | `string`  | Image URL or color code format.                   | -              |

### `move(steps)`

If the number of steps is positive, the sprite will move forward in the direction it's facing.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| steps               | `number`  | Amount of pixels to move                          | -              |

### `flip(axis)`

Flips the actor on a specified axis.
!!! note
    Use this as the values for axis horizontal, h, x, vertical, v or y.

Valid axis: horizontal, h, x, vertical, v or y.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| axis               | `string`| The axis to flip the actor from                              | -              |


### `grow(x, y)`

Increases or decreases the size of the actor.

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| x                   | `number`  | Amount by which to increase width                 | -              |
| y                   | `number`  | Amount by which to increase height                | -              |
