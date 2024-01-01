## Particle Creator: [https://joaquinlarroca.github.io/PizzaJS-particle-creator/](https://joaquinlarroca.github.io/PizzaJS-particle-creator/)

```js
import * as p from "./source/Addons/particle.js"
```

## Particle 
Represents an individual particle in the system.



```javascript
new Particle(x, y, size, color, speedX, speedY, lifespan, alphaReducer)
```

| Parameters   | Type     | Description                           | Default Value |
|--------------|----------|---------------------------------------|---------------|
| x            | `number` | X-coordinate of the particle          | -             |
| y            | `number` | Y-coordinate of the particle          | -             |
| size         | `number` | Size of the particle                  | -             |
| color        | `string` | Color of the particle (CSS format)    | -             |
| speedX       | `number` | Horizontal speed of the particle      | -             |
| speedY       | `number` | Vertical speed of the particle        | -             |
| lifespan     | `number` | Lifespan of the particle              | -             |
| alphaReducer | `number` | Alpha reduction rate over time        | -             |


### Methods
#### update()
Updates the particle's position, alpha, and lifespan based on time.

####  draw()
Draws the particle on the canvas.


## ParticleGenerator Class

Manages a collection of particles.
Constructor

```js
new ParticleGenerator(x, y, particleCount, sizeRange, color, speedY, speedX, lifespanRange, alphaReducer)
```

| Parameters     | Type     | Description                            | Default Value |
|----------------|----------|----------------------------------------|---------------|
| x              | `number` | X-coordinate of the particle generator | -             |
| y              | `number` | Y-coordinate of the particle generator | -             |
| particleCount  | `number` | Number of particles to generate        | -             |
| sizeRange      | `number` | Range of particle sizes                | -             |
| color          | `string` | Color of the particles (CSS format)    | -             |
| speedX         | `number` | Horizontal speed range of particles    | -             |
| speedY         | `number` | Vertical speed range of particles      | -             |
| lifespanRange  | `number` | Range of lifespans for particles       | -             |
| alphaReducer   | `number` | Alpha reduction rate over time         | -             |

### Methods
#### update()
Updates the state of all particles within the generator.

#### draw()
Draws all particles within the generator on the canvas.