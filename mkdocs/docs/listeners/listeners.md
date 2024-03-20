## Mouse object

| variables                 | Description                                                          |
|---------------------------|----------------------------------------------------------------------|
| `x`                       | Indicates the mouse position in the x axis.                          |
| `y`                       | Indicates the mouse position in the y axis.|
| `show`                    | Indicates if the mouse should be shown or not. default: true.|
| `pos`                     | An array with x and y. |
| `preventRightClick`       | Whether it should prevent contexMenu or not. |
| `click`                   | Is true if the mouse is being clicked and its false when its not clicked. (Supports touch but no dragging) |
| `holding`                 | Indicates if the mouse is being hold |
| `objectSelected`          | It has the object / class currently selected. (To understand more via discord or template code `template/dragTemplate.js`)|

!!! example
    ```js
    console.log(mouse.pos);
    ```
    output: [125,253]

## Prevent Keys
An array that hold all keys that the listener shouldn't be listening.
default  value: ["F1" ,"F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]
## Key pressed
```js
keyPressed(key);
```

Return true if the key given is being pressed.

| Parameters                     | Type      | Description                                                          | Default Value  |
|--------------------------------|-----------|----------------------------------------------------------------------|----------------|
| key                            | `string`  | The key you want to know if its pressed                              | -              | 

!!! example
    ```js
    import { start, setup, clear, ctx, keyPressed, canvas, drawtext } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"

    setup(1920, 1080, 1);

    let size = 48
    let x = canvas.width / 2
    let y = canvas.height / 2

    window.addEventListener("pjsUpdate", () => {
        clear()
        if (keyPressed("w")) {
            ctx.fillStyle = "#55FF55"
            drawtext("W pressed", [x, y], size, "sans-serif", "middle", "center")
        }
        else {
            ctx.fillStyle = "#FF5555"
            drawtext("W not pressed", [x, y], size, "sans-serif", "middle", "center")
        }
    })

    start()
    ```
    Not pressing W
    ![Image](./img/kpnw.png)

    Pressing W
    ![Image](./img/kpw.png)

## Set up listeners
When putting `setup(1920,1080,1,false)` you are disabling automatic initialization of listeners. If you want to do it manually just use `setupAllEventListeners()`

!!! Example
    ```js
    import { start, setupAllEventListeners, setupMouseListener, setupKeyboardListener, setupResizeListener } from "/source/modules/index.js"

    setup(1920, 1080, 1, false); // start a canvas without the event listeners

    setupAllEventListeners() // Initialize all event listeners

    // setupMouseListener() for setting up only the mouse.

    // setupKeyboardListener() for setting up only the keyboard and keyPressed function.

    // setupResizeListener() for setting up the automatic resize of the game when the windows is resized.
    ```