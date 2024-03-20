```js
new hitbox2(x, y, width, height)
```

| Parameters | Type        | Description                                                                 | Default Value |
|------------|-------------|-----------------------------------------------------------------------------|---------------|
| x          | `number`    |  x position for the hitbox                                                  | undefined     |
| y          | `number`    |  y position for the hitbox                                                  | undefined     |
| width      | `number`    |  width of the hitbox                                                        | undefined     |
| height     | `number`    |  height of the hitbox                                                       | undefined     |

!!! note
    Color is randomized, but can be changed.

## Attributes

| Attributes  | Description                                           |
|-------------|-------------------------------------------------------|
| x           |  x position for the hitbox                            |
| y           |  y position for the hitbox                            |
| width       |  width of the hitbox                                  |
| height      |  height of the hitbox                                 |
| `color`     | The color of the hitbox.                              |
| `lineWidth` | The width of the stroke for drawing the hitbox.       |
| `params`    | Object for handling update instructions.              |


## Methods

### `draw()`

Renders the hitbox onto the canvas.

### `updateDimensions()`

Updates the dimensions of the hitbox.

### `collide(hitbox)`

Checks collision between hitbox2 and hitbox. If they are colliding returns `true` else returns `false`

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| hitbox              | `object`  | The hitbox object                                 | -              |

### `collide2(hitbox)`

Checks collision between hitbox2 and hitbox2. 

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| hitbox              | `object`  | The hitbox2 object                                | -              |

### `collidepoint(point)`

Checks collision with a single point. 

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| point               | `number[]`| An array containing x and y of the point          | -              |



