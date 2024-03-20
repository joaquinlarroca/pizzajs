import { time, ctx, global } from "../modules/index.js"
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
        this.x += this.speedX * time.delta;
        this.y += this.speedY * time.delta;
        this.reduce = this.alphaReducer * time.delta;
        this.alpha -= this.reduce;
        this.alpha = Math.max(0, Math.min(1, this.alpha));
        if (!this.hasSetLifeSpan) {
            this.hasSetLifeSpan = true;
            setTimeout(() => { this.lifespan = -1 }, this.lifespan);
        }

    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        ctx.restore();
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
        this.particles = this.particles.filter(particle => particle.x < global.setupWidth);
        this.particles = this.particles.filter(particle => particle.y > 0);
        this.particles = this.particles.filter(particle => particle.y < global.setupHeight);
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
