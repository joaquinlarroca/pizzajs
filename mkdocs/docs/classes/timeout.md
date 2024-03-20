```js
new timeout(timeMS)
```

| Parameters          | Type      | Description                                           | Default Value  |
|---------------------|-----------|-------------------------------------------------------|----------------|
| timeMS              | `number`  | The time in ms of the delay before it can be started. | 1000           |


## Attributes

| Attributes       | Description                                                                    |
|------------------|--------------------------------------------------------------------------------|
| `time`           | The time in ms of the delay before it can be started.                          |
| `active`         | Indicates whether the timeout is active or not. |
| `timeElapsed`    | Holds the time elapsed since start() up to timeMS in milliseconds.              |
| `timeLeft`       | The remaining time in milliseconds before the timeout completes.              |
| `updateTime`     | The interval in milliseconds for updating `timeElapsed` and `timeLeft`.              |
| `currentTime`    | The timestamp when the timeout was started.              |


## Methods

### start()

The start() method is responsible for starting the timeout (setting active to true for the time specified).

!!! Example
    ```js

    import { start, setup, clear, timeout, canvas, drawtext, ctx, mouse } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"

    setup(1920, 1080, 1);

    let size = 48
    let x = canvas.width / 2
    let y = canvas.height / 2

    let MyTimeout = new timeout(1500)

    window.addEventListener("pjsUpdate", () => {
        clear()
        if (mouse.click && !MyTimeout.active) {
            MyTimeout.start()
        }
        if (MyTimeout.active) {
            ctx.fillStyle = "#FF0000"
        }
        else {
            ctx.fillStyle = "#00FF00"
        }
        drawtext(MyTimeout.active, [x, y], size, "sans-serif", "middle", "center")
        drawtext(Math.round(MyTimeout.timeLeft / 100) / 10, [x, y + size], size, "sans-serif", "middle", "center")
    })

    start()
    ```
    Before Clicking
    ![Image](./img/timeout2.png)
    After clicked and 1 second before reseting
    ![Image](./img/timeout1.png)
    After 1.5 seconds reseted again
    ![Image](./img/timeout2.png)
