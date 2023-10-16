
class Particle {
    constructor(x, y, size, color, speedX, speedY, lifespan,alphaReducer) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.lifespan = lifespan;
        this.alphaReducer = alphaReducer
        this.alpha = 1
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= this.alphaReducer

        this.lifespan -= 1

        // Apply any additional modifications to particle behavior here
        // Apply gravity
        // this.speedY += 0.1;

        // Example: Bounce off walls
        // if (this.x < 0 || this.x > ctx.width) {
        //   this.speedX *= -1;
        // }
        // if (this.y < 0 || this.y > ctx.height) {
        //   this.speedY *= -1;
        // }
    }

    draw() {
        ctx.save();

        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color;
        //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillRect(this.x, this.y, this.size, this.size);

        ctx.restore();

    }
}

class ParticleGenerator {
    constructor(x, y, particleCount, sizeRange, color, speedY, speedX, lifespanRange,alphaReducer) {
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
        this.particles = this.particles.filter(particle => particle.lifespan > 0 );
        this.particles = this.particles.filter(particle => particle.alpha > 0);
        for (let i = 0; i < this.particleCount; i++) {
            let size = Math.random() * this.sizeRange + 2;
            let speedX = (Math.random()) * this.speedX;
            let speedY = (Math.random()) * this.speedY;
            let lifespan = Math.random() * this.lifespanRange;
            this.particles.push(new Particle(this.x, this.y, size, this.color, speedX, speedY, lifespan,this.alphaReducer));
        }
    }

    draw() {
        this.particles.forEach(particle => {
            particle.draw(ctx);
        });
    }
}