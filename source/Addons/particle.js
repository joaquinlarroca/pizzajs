import * as pjs from "../modules/index.js"
export class Particle {
    constructor(x, y, size, color, speedX, speedY, lifespan, alphaReducer) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.lifespan = lifespan;
        this.alphaReducer = alphaReducer
        this.alpha = 1
        this.hasSetLifeSpan = false
    }

    update() {
        this.x += this.speedX * pjs.global.deltaTime;
        this.y += this.speedY * pjs.global.deltaTime;
        this.reduce = this.alphaReducer * pjs.global.deltaTime
        this.alpha -= this.reduce
        this.alpha = Math.max(0, Math.min(1, this.alpha));
        if(!this.hasSetLifeSpan){
            this.hasSetLifeSpan = true
            setTimeout(() => { this.lifespan = -1 }, this.lifespan)
        }
        
    }

    draw() {
        pjs.ctx.save();
        pjs.ctx.globalAlpha = this.alpha
        pjs.ctx.fillStyle = this.color;
        pjs.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        pjs.ctx.restore();
    }
}

export class ParticleGenerator {
    constructor(x, y, particleCount, sizeRange, color, speedY, speedX, lifespanRange, alphaReducer) {
        this.x = x;
        this.y = y;
        this.particleCount = particleCount
        this.sizeRange = sizeRange
        this.color = color
        this.speedX = speedX
        this.speedY = speedY
        this.lifespanRange = lifespanRange
        this.alphaReducer = alphaReducer
        this.particles = [];
    }

    update() {
        this.particles.forEach(particle => {
            particle.update();
        });
        this.particles = this.particles.filter(particle => particle.lifespan > 0);
        this.particles = this.particles.filter(particle => particle.x > 0);
        this.particles = this.particles.filter(particle => particle.x < pjs.global.setupWidth);
        this.particles = this.particles.filter(particle => particle.y > 0);
        this.particles = this.particles.filter(particle => particle.y < pjs.global.setupHeight);
        this.particles = this.particles.filter(particle => particle.alpha > 0);
        for (let i = 0; i < this.particleCount; i++) {
            let size = Math.random() * this.sizeRange + 2;
            let speedX = (Math.random()) * this.speedX;
            let speedY = (Math.random()) * this.speedY;
            let lifespan = Math.random() * this.lifespanRange;
            this.particles.push(new Particle(this.x, this.y, size, this.color, speedX, speedY, lifespan, this.alphaReducer));
        }
    }

    draw() {
        this.particles.forEach(particle => {
            particle.draw();
        });
    }
}
