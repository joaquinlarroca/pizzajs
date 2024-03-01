
# ![Logo](/source/icons/favicon32x.png) PizzaJS [![pages-build-deployment](https://github.com/joaquinlarroca/pizzajs/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/joaquinlarroca/pizzajs/actions/workflows/pages/pages-build-deployment) ![GitHub License](https://img.shields.io/github/license/joaquinlarroca/pizzajs) ![GitHub Release](https://img.shields.io/github/v/release/joaquinlarroca/pizzajs)


## Getting Started
To start using PizzaJS in your project, follow these steps:

### Download the Latest Version from GitHub:
Visit the GitHub repository and download the latest release of PizzaJS. 

### Setting up Your Project:
Use the folder `template/project` as the main folder for your project. Rename it and there you have your first PizzaJS project

```
My_PizzaJS_Project/
│
├── index.html
│
├── main.js
│
└── source/
    │
    ├── modules/
    │   │
    │   ├── classes.js
    │   │
    │   ├── functions.js
    │   │
    │   └── global.js
    │   │
    │   └── index.js
    │   │
    │   └── listener.js
    ├── ...
```

### Importing PizzaJS Modules:
If wanted, change the importing method

```js
// Use `pjs` or anything as a prefix for PizzaJS
import * as pjs from "./source/modules/index.js"
```

```js
// Use PizzaJS without a prefix
// Import global
import { global, image } from './source/modules/global.js'
// Import functions
import { initLoaderCheck, canvas, ctx, drawtext, loadImage, loadSound, loadFont, fillRect, setup, start, clear, fitText, measureTextWidth, shakeScreen } from './source/modules/functions.js';
// Import listeners
import { setupAllEventListeners, setupMouseListener, setupResizeListener, setupKeyboardListener, keyPressed, mouse, pressedKeys } from './source/modules/listener.js';
// Import all classes
import { actor, button, hitbox, hitbox2, rect, sound, slider, timeout } from './classes.js';
// Starts the loadCheck
initLoaderCheck()
```
## Games made with PizzaJS

| Game Icon | Play | Author | Version |
|-----------|------|--------|---------|
| <img src="https://img.itch.zone/aW1nLzEzNzY4MTUxLnBuZw==/315x250%23c/dY6IHU.png" alt="gameIcon" width="128"/> |  [**PLAY**](https://larrocax.itch.io/alien-laser-ray) | [**larrocax**](https://larrocax.itch.io/) | Alpha v1 | 

## Documentation
All documentation is provided at the [pizzajs site](https://joaquinlarroca.github.io/pizzajs/)

## Support
To request support visit our [discord](https://discord.gg/BmNS5aBEPT)

## Author

| Avatar | Author |
|--------|-------------------------|
| <img src="https://avatars.githubusercontent.com/u/52870198?v=4" alt="avatar" width="32"/> |  [**joaquinlarroca**](https://github.com/joaquinlarroca/) | 

## License
[GPL-3.0 license](LICENSE)
