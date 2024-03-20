# ![Logo](/source/icons/favicon32x.png) PizzaJS [![pages-build-deployment](https://github.com/joaquinlarroca/pizzajs/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/joaquinlarroca/pizzajs/actions/workflows/pages/pages-build-deployment) ![GitHub License](https://img.shields.io/badge/license-MIT-%2397CA01) ![GitHub Release](https://img.shields.io/github/v/release/joaquinlarroca/pizzajs)

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
import { actor, button, hitbox, hitbox2, hitboxCircle, rect, sound, slider, timeout } from './source/modules/classes.js';
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

## Licenses

### PizzaJS license
```txt
MIT License

Copyright (c) 2024 Joaquin Larroca

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
### buttons.js
This page uses a modified version of github buttons.js.
Modified version is located in `pizzajs/mkdocs/social-buttons.js`.
Original version at [https://github.com/buttons/github-buttons/blob/main/dist/buttons.js](https://github.com/buttons/github-buttons/blob/main/dist/buttons.js).

```txt
BSD 2-Clause License

Copyright (c) 2023, なつき
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```