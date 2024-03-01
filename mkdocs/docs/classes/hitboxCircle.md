| Parameters | Type     | Description                                                    | Default Value |
|------------|----------|----------------------------------------------------------------|---------------|
| x          | `number` | The center of the circle in the x-axis                         | -             |
| y          | `number` | The center of the circle in the y-axis                         | -             |
| radius     | `number` | The radius of the circle                                       | -             |

!!! note
    Color is randomized, but can be changed.

## Attributes

| Attributes  | Description                                           |
|-------------|-------------------------------------------------------|
| `x`         | The x position for the circle.|
| `y`         | The y position for the circle.|
| `radius`    | The radius of the circle.|
| `color`     | The color of the hitbox.                              |
| `lineWidth` | The width of the stroke for drawing the hitbox.       |


## Methods

### `draw()`

Renders the hitbox onto the canvas.

### `collide(hitbox)`

Checks collision between two hitboxes(hitboxCircle and hitbox). If they are colliding returns `true` else returns `false`

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| hitbox              | `object`  | The hitbox object                                 | -              |

### `collide2(hitbox)`

Checks collision between hitboxCircle and hitbox 2. 

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| hitbox              | `object`  | The hitbox2 object                                | -              |

### `collideCircle(hitbox)`

Checks collision between two hitboxCircle. 

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| hitbox              | `object`  | The hitboxCircle object                           | -              |


### `collidepoint(point)`

Checks collision with a single point. 

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| point               | `number[]`| An array containing x and y of the point          | -              |



