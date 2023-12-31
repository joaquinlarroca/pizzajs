
# ![Logo](/source/icons/favicon32x.png) PizzaJS

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
import { global, image } from './source/modules/global.js'
// Import functions
import { initLoaderCheck, canvas, ctx, drawtext, loadImage, loadSound, loadFont, fillRect, setup, start, clear, fitText, measureTextWidth } from './source/modules/functions.js';
// Import listeners
import { setupAllEventListeners, setupMouseListener, setupResizeListener, setupKeyboardListener, keyPressed, mouse, pressedKeys } from './source/modules/listener.js';
// Import all classes
import { actor, button, hitbox, hitbox2, rect, sound, slider } from './source/modules/classes.js';

// Starts the loadCheck
initLoaderCheck()
```

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
