```js
new hitbox(that, multiplier, color, offsetX, offsetY)
```

| Parameters | Type     | Description                                                    | Default Value |
|------------|----------|----------------------------------------------------------------|---------------|
| that       | `object` | An object that has x, y, width, height, etc.                   | -             |
| multiplier | `number` | Indicates the scale of the hitbox 0 being 100% and 1 being 0%. | 0             |
| color      | `string` | The color of the hitbox.                                       | undefined     |
| offsetX    | `number` | The horizontal offset for positioning the hitbox.              | 0             |
| offsetY    | `number` | The vertical offset for positioning the hitbox.                | 0             |

!!! note
    If color is `undefined` it will be randomized

## Attributes

| Attributes  | Description                                           |
|-------------|-------------------------------------------------------|
| `that`      | Holds the image object if an image source is provided.|
| `multiplier`| Indicates the scale of the hitbox.                    |
| `offsetX`   | The horizontal offset used for positioning the hitbox.|
| `offsetY`   | The vertical offset used for positioning the hitbox.  |
| `color`     | The color of the hitbox.                              |
| `lineWidth` | The width of the stroke for drawing the hitbox.       |
| `params`    | String that contains hitbox data.              |


## Methods

### `draw()`

Renders the hitbox onto the canvas.

### `updateDimensions()`

Updates the dimensions of the hitbox.

### `collide(hitbox)`

Checks collision between two hitboxes. If they are colliding returns `true` else returns `false`

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| hitbox              | `object`  | The hitbox object                                 | -              |

### `collide2(hitbox)`

Checks collision between hitbox and hitbox 2. 

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| hitbox              | `object`  | The hitbox2 object                                | -              |

### `collidepoint(point)`

Checks collision with a single point. 

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| point               | `number[]`| An array containing x and y of the point          | -              |



