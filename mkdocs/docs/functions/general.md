## **Load Image**

The `loadImage` function downloads an image from a provided URL and returns the src.

```js
loadImage(name,url);
```
!!! info
    The `loadImage` function is already implemented into all classes from PizzaJS.


| Parameters | Type        | Description                                                                 | Default Value |
|------------|-------------|-----------------------------------------------------------------------------|---------------|
| name       | `string`    | A name attached to the url accesible via image[name]                        | -   |
| url        | `string`    | The URL pointing to the image file to be downloaded and used.               | -   |


!!! Example
    ```js
    import { start, setup, clear, canvas, actor, loadImage, image } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"

    setup(1920, 1080, 1);

    let size = 256
    let x = canvas.width / 2 - size/2
    let y = canvas.height / 2 - size/2

    // loadImage("bunny,"bunny.png")
    // All classes that have an image or may contain one -
    // already have implemented the loadImage function.

    let actor1 = new actor("/source/images/bunny.png", [x, y], [size, size], [0, 0])

    // Using name
    //let actor = new actor(image["bunny"], [x, y], [size, size], [0, 0])


    window.addEventListener("pjsUpdate", () => {
        clear()
        actor1.draw()
    })

    start()
    ```

    ![bunny.png](./img/bunny.png)





## **Load Sound**

The `loadSound` function downloads a sound from a provided URL and returns the src.

```js
loadSound(url);
```
!!! info

    The `loadSound` function is already implemented into the sound's classes from PizzaJS.


| Parameters | Type        | Description                                                                 | Default Value |
|------------|-------------|-----------------------------------------------------------------------------|---------------|
| url        | `string`    | The URL pointing to the sound file to be downloaded and used.               | -  |


## **Clear**

The `clear` function erases all things from the canvas.
Additionaly it broadcast an event after clearing `pjsAfterClear`, meant for addons 

```js
clear();
```

## **Fill Rect**

The `fillRect` function draws a filled rect with the specified parameters.

```js
fillRect(x, y, width, height);
```


| Parameters | Type        | Description                                                                 | Default Value |
|------------|-------------|-----------------------------------------------------------------------------|---------------|
| x          | `number`    | the x position for the rect                                                 | 0             |
| y          | `number`    | the y position for the rect                                                 | 0             |
| width      | `number`    | the width of the rect                                                       | 0             |
| height     | `number`    | the height of the rect                                                      | 0             |


!!! Example
    ```js
    import { start, setup, clear, ctx, fillRect } from "/source/modules/index.js"
    import "/source/Addons/DefaultScreenshot.js"
    
    setup(1920, 1080, 1);
    
    window.addEventListener("pjsUpdate", () => {
        clear();
        ctx.fillStyle = "red";
        fillRect(64, 64, 128, 128);
    })
    
    start()
    ```

    ![Image](./img/fillrect.png)

## **Shake Screen**

The `shakeScreen` function shakes the screen with a duration and time specified.

```js
shakeScreen(intensity, duration);
```

| Parameters | Type        | Description                                                                 | Default Value |
|------------|-------------|-----------------------------------------------------------------------------|---------------|
| intensity  | `number`    | The intensity of the shake.                                                 |       -       |
| duration   | `number`    | Duration in ms.                                                             |       -       |