

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| [x, y]              | `number[]`| The top left position of the actor in pixels.     | [0, 0]         |
| [width, height]     | `number[]`| The width and height of the actor in pixels.      | [32, 32]       |
| color               | `string`  | color                                             | undefined   |

!!! note
    If color is `undefined` it will be randomized

## Attributes

| Attributes                | Description                                                       |
|---------------------------|-------------------------------------------------------------------|
| `color`                   | Holds the color value if the actor is using a color.              |
| `x, y`                    | Current position of the actor.                                    |
| `hitbox`                  | Hitbox object for collision detection.                            |
| `width, height`           | Dimensions of the actor.                                          |
| `halfwidth, halfheight`   | Half of the width and height of the actor.                        |
| `pos`                     | Position coordinates of the actor.                                |
| `anglex, angley`          | Position coordinates used for angle calculations.                 |
| `angle`                   | Angle of rotation for the actor (in degrees).                     |
| `alpha`                   | Transparency of the actor.                                        |

## Methods

### draw()

The draw() method is responsible for rendering the rect onto the canvas based on its current properties.

!!! Example
    ```js

    import * as pjs from "/source/modules/index.js"

    pjs.setup(1920, 1080, 1);

    let size = 256
    let x = pjs.canvas.width / 2 - size/2
    let y = pjs.canvas.height / 2 - size/2

    let Myrect = new pjs.rect([x, y], [size, size], "#FF00FF")

    window.addEventListener("pjsUpdate", () => {
        pjs.clear()
        Myrect.draw()
    })

    pjs.start()
    ```

    ![Image](./img/rect.png)

