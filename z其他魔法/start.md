```vue
<template>
  <div id="app">
    <router-view />
    <canvas id="canvas" width="100%" height="100%"></canvas>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class GenalChat extends Vue {
  mounted() {
    this.runStarrySky();
  }

  // 星空代码
  runStarrySky() {
    //Helpers
    function lineToAngle(x1: any, y1: any, length: any, radians: any) {
      var x2 = x1 + length * Math.cos(radians),
        y2 = y1 + length * Math.sin(radians);
      return { x: x2, y: y2 };
    }

    function randomRange(min: any, max: any) {
      return min + Math.random() * (max - min);
    }

    function degreesToRads(degrees: any) {
      return (degrees / 180) * Math.PI;
    }

    //Particle
    var particle = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      radius: 0,

      create: function(x: any, y: any, speed: any, direction: any) {
        var obj = Object.create(this);
        obj.x = x;
        obj.y = y;
        obj.vx = Math.cos(direction) * speed;
        obj.vy = Math.sin(direction) * speed;
        return obj;
      },

      getSpeed: function() {
        return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      },

      setSpeed: function(speed: any) {
        var heading = this.getHeading();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
      },

      getHeading: function() {
        return Math.atan2(this.vy, this.vx);
      },

      setHeading: function(heading: any) {
        var speed = this.getSpeed();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
      },

      update: function() {
        this.x += this.vx;
        this.y += this.vy;
      },
    };

    //Canvas and settings
    var canvas: any = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      width = (canvas.width = window.innerWidth),
      height = (canvas.height = window.innerHeight),
      stars: any = [],
      shootingStars: any = [],
      layers = [
        { speed: 0.15, scale: 0.2, count: 320 },
        { speed: 0.3, scale: 0.5, count: 50 },
        { speed: 0.5, scale: 0.75, count: 30 },
      ],
      starsAngle = 145,
      shootingStarSpeed = {
        min: 15,
        max: 20,
      },
      shootingStarOpacityDelta = 0.01,
      trailLengthDelta = 0.01,
      shootingStarEmittingInterval = 2000,
      shootingStarLifeTime = 500,
      maxTrailLength = 300,
      starBaseRadius = 2,
      shootingStarRadius = 3,
      paused = false;

    //Create all stars
    for (var j = 0; j < layers.length; j += 1) {
      var layer = layers[j];
      for (var i = 0; i < layer.count; i += 1) {
        var star = particle.create(randomRange(0, width), randomRange(0, height), 0, 0);
        star.radius = starBaseRadius * layer.scale;
        star.setSpeed(layer.speed);
        star.setHeading(degreesToRads(starsAngle));
        stars.push(star);
      }
    }

    function createShootingStar() {
      var shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
      shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
      shootingStar.setHeading(degreesToRads(starsAngle));
      shootingStar.radius = shootingStarRadius;
      shootingStar.opacity = 0;
      shootingStar.trailLengthDelta = 0;
      shootingStar.isSpawning = true;
      shootingStar.isDying = false;
      shootingStars.push(shootingStar);
    }

    function killShootingStar(shootingStar: any) {
      setTimeout(function() {
        shootingStar.isDying = true;
      }, shootingStarLifeTime);
    }

    function update() {
      if (!paused) {
        context.clearRect(0, 0, width, height);
        context.fillStyle = '#282a3a';
        context.fillRect(0, 0, width, height);
        context.fill();

        for (var i = 0; i < stars.length; i += 1) {
          var star = stars[i];
          star.update();
          drawStar(star);
          if (star.x > width) {
            star.x = 0;
          }
          if (star.x < 0) {
            star.x = width;
          }
          if (star.y > height) {
            star.y = 0;
          }
          if (star.y < 0) {
            star.y = height;
          }
        }

        for (i = 0; i < shootingStars.length; i += 1) {
          var shootingStar = shootingStars[i];
          if (shootingStar.isSpawning) {
            shootingStar.opacity += shootingStarOpacityDelta;
            if (shootingStar.opacity >= 1.0) {
              shootingStar.isSpawning = false;
              killShootingStar(shootingStar);
            }
          }
          if (shootingStar.isDying) {
            shootingStar.opacity -= shootingStarOpacityDelta;
            if (shootingStar.opacity <= 0.0) {
              shootingStar.isDying = false;
              shootingStar.isDead = true;
            }
          }
          shootingStar.trailLengthDelta += trailLengthDelta;

          shootingStar.update();
          if (shootingStar.opacity > 0.0) {
            drawShootingStar(shootingStar);
          }
        }

        //Delete dead shooting shootingStars
        for (i = shootingStars.length - 1; i >= 0; i--) {
          if (shootingStars[i].isDead) {
            shootingStars.splice(i, 1);
          }
        }
      }
      requestAnimationFrame(update);
    }

    function drawStar(star: any) {
      context.fillStyle = 'rgb(255, 221, 157)';
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
      context.fill();
    }

    function drawShootingStar(p: any) {
      var x = p.x,
        y = p.y,
        currentTrailLength = maxTrailLength * p.trailLengthDelta,
        pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

      context.fillStyle = 'rgba(255, 255, 255, ' + p.opacity + ')';
      // context.beginPath();
      // context.arc(x, y, p.radius, 0, Math.PI * 2, false);
      // context.fill();
      var starLength = 5;
      context.beginPath();
      context.moveTo(x - 1, y + 1);

      context.lineTo(x, y + starLength);
      context.lineTo(x + 1, y + 1);

      context.lineTo(x + starLength, y);
      context.lineTo(x + 1, y - 1);

      context.lineTo(x, y + 1);
      context.lineTo(x, y - starLength);

      context.lineTo(x - 1, y - 1);
      context.lineTo(x - starLength, y);

      context.lineTo(x - 1, y + 1);
      context.lineTo(x - starLength, y);

      context.closePath();
      context.fill();

      //trail
      context.fillStyle = 'rgba(255, 221, 157, ' + p.opacity + ')';
      context.beginPath();
      context.moveTo(x - 1, y - 1);
      context.lineTo(pos.x, pos.y);
      context.lineTo(x + 1, y + 1);
      context.closePath();
      context.fill();
    }

    //Run
    update();

    //Shooting stars
    setInterval(function() {
      if (paused) return;
      createShootingStar();
    }, shootingStarEmittingInterval);

    window.onfocus = function() {
      paused = false;
    };

    window.onblur = function() {
      paused = true;
    };
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  #canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>



#############################
以下这个是上面这个的优化版本 

<style>
    * {
    margin: 0;
    padding: 0;
}
html {
    overflow: hidden;
}
canvas {
    /* cursor: none; */
}
</style>
<canvas id="canvas" width="100%" height="100%"></canvas>
<script>

class Particle {
    particle = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0
    }
    create = (x, y, speed, direction, color) => {
        const obj = Object.create(this.particle);
        obj.x = x;
        obj.y = y;
        obj.color = color;
        obj.vx = Math.cos(direction) * speed;
        obj.vy = Math.sin(direction) * speed;
        return obj;
    }
    getSpeed = (obj) => {
        return Math.sqrt(obj.vx * obj.vx + obj.vy * obj.vy);
    }
    setSpeed = (obj, speed) => {
        const heading = this.getHeading(obj);
        obj.vx = Math.cos(heading) * speed;
        obj.vy = Math.sin(heading) * speed;
    }
    getHeading = (obj) => {
        return Math.atan2(obj.vy, obj.vx);
    }
    setHeading = (obj, heading) => {
        const speed = this.getSpeed(obj);
        obj.vx = Math.cos(heading) * speed;
        obj.vy = Math.sin(heading) * speed;
    }
    update = (obj) => {
        obj.x += obj.vx;
        obj.y += obj.vy;
    }
}

class GenalChat {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');

        this.particle = new Particle()

        this.width = (this.canvas.width = window.innerWidth);
        this.height = (this.canvas.height = window.innerHeight);
        this.stars = [];
        this.shootingStars = [];
        this.layers = [
          { speed: Number(((Math.random()*4 + 1) / 10).toFixed(2)), scale: Number(((Math.random()*4 + 1) / 10).toFixed(2)), count: 320 },
          { speed: Number(((Math.random()*6 + 2) / 10).toFixed(2)), scale: Number(((Math.random()*6 + 2) / 10).toFixed(2)), count: 50 },
          { speed: Number(((Math.random()*8 + 3) / 10).toFixed(2)), scale: Number(((Math.random()*6 + 2) / 10).toFixed(2)), count: 30 },
        ];
        this.starsAngle = 145;
        this.shootingStarSpeed = {
          min: 5,
          max: 20,
        };
        this.shootingStarOpacityDelta = 0.01;
        this.trailLengthDelta = 0.01;
        this.shootingStarEmittingInterval = 2000;
        this.shootingStarLifeTime = 500;
        this.maxTrailLength = 300;
        this.starBaseRadius = 2;
        this.shootingStarRadius = 3;
        this.paused = false;

        window.onfocus = function() {
            this.paused = false;
        };

        window.onblur = function() {
            this.paused = true;
        };
    }

    destory = () => {
        clearInterval(this.timerInterval)
        cancelAnimationFrame(this.timerAnimationFrame)
        this.stars = [];
        this.shootingStars = [];
    }

    start() {
      this.runStarrySky();
      this.update();
      this.timerInterval = setInterval(() => {
        if (this.paused) return;
        this.createShootingStar();
      }, this.shootingStarEmittingInterval);
    }

    lineToAngle(x1, y1, length, radians) {
        var x2 = x1 + length * Math.cos(radians),
            y2 = y1 + length * Math.sin(radians);
        return { x: x2, y: y2 };
    }

    randomRange(min, max) {
        return min + Math.random() * (max - min);
    }

    degreesToRads(degrees) {
        return (degrees / 180) * Math.PI;
    }

    degreesToRads(degrees) {
        return (degrees / 180) * Math.PI;
    }

    createShootingStar = () => {
        const shootingStar = this.particle.create(this.randomRange(this.width / 2, this.width), this.randomRange(0, this.height / 2), 0, 0, this.randomColor(1));
        this.particle.setSpeed(shootingStar, this.randomRange(this.shootingStarSpeed.min, this.shootingStarSpeed.max));
        this.particle.setHeading(shootingStar, this.degreesToRads(this.starsAngle));
        shootingStar.radius = this.shootingStarRadius;
        shootingStar.opacity = 0;
        shootingStar.trailLengthDelta = 0;
        shootingStar.isSpawning = true;
        shootingStar.isDying = false;
        this.shootingStars.push(shootingStar);
    }

    killShootingStar(shootingStar) {
        setTimeout(function() {
          shootingStar.isDying = true;
        }, this.shootingStarLifeTime);
    }

    randomColor(a) {
        const r = Math.floor(Math.random() * 255);// random()方法可返回介于 0~1 之间的一个随机数
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r},${g},${b},${a})`;
    }

    drawStar = (star) => {
        this.context.fillStyle = star.color // 'rgb(255, 221, 157)';
        this.context.beginPath();
        this.context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        this.context.fill();
    }

    drawShootingStar = (particle) => {
        const x = particle.x,
        y = particle.y,
        currentTrailLength = this.maxTrailLength * particle.trailLengthDelta,
        pos = this.lineToAngle(x, y, -currentTrailLength, this.particle.getHeading(particle));
        this.context.fillStyle = particle.color; // 'rgba(255, 255, 255, ' + particle.opacity + ')';
        const starLength = 5;
        this.context.beginPath();
        this.context.moveTo(x - 1, y + 1);
        this.context.lineTo(x, y + starLength);
        this.context.lineTo(x + 1, y + 1);
        this.context.lineTo(x + starLength, y);
        this.context.lineTo(x + 1, y - 1);
        this.context.lineTo(x, y + 1);
        this.context.lineTo(x, y - starLength);
        this.context.lineTo(x - 1, y - 1);
        this.context.lineTo(x - starLength, y);
        this.context.lineTo(x - 1, y + 1);
        this.context.lineTo(x - starLength, y);
        this.context.closePath();
        this.context.fill();
        
        this.context.fillStyle = particle.color; // 'rgba(255, 221, 157, ' + particle.opacity + ')';
        this.context.beginPath();
        this.context.moveTo(x - 1, y - 1);
        this.context.lineTo(pos.x, pos.y);
        this.context.lineTo(x + 1, y + 1);
        this.context.closePath();
        this.context.fill();
    }

    update = () => {
        if (!this.paused) {
          this.context.clearRect(0, 0, this.width, this.height);
          this.context.fillStyle = '#282a3a';
          this.context.fillRect(0, 0, this.width, this.height);
          this.context.fill();
          const starsLength = this.stars.length
          for (let i = 0; i < starsLength; i += 1) {
            const star = this.stars[i];
            this.particle.update(star);
            this.drawStar(star);
            if (star.x > this.width) {
              star.x = 0;
            }
            if (star.x < 0) {
              star.x = this.width;
            }
            if (star.y > this.height) {
              star.y = 0;
            }
            if (star.y < 0) {
              star.y = this.height;
            }
          }
          const shootingStarsLength = this.shootingStars.length
          for (let i = 0; i < shootingStarsLength; i++) {
            const shootingStar = this.shootingStars[i];
            if (shootingStar.isSpawning) {
              shootingStar.opacity += this.shootingStarOpacityDelta;
              if (shootingStar.opacity >= 1.0) {
                shootingStar.isSpawning = false;
                this.killShootingStar(shootingStar);
              }
            }
            if (shootingStar.isDying) {
              shootingStar.opacity -= this.shootingStarOpacityDelta;
              if (shootingStar.opacity <= 0.0) {
                shootingStar.isDying = false;
                shootingStar.isDead = true;
              }
            }
            shootingStar.trailLengthDelta += this.trailLengthDelta;
            this.particle.update(shootingStar);
            if (shootingStar.opacity > 0) {
              this.drawShootingStar(shootingStar);
            }
          }
          //Delete dead shooting shootingStars
          for (let i = this.shootingStars.length - 1; i >= 0; i--) {
            if (this.shootingStars[i].isDead) {
              this.shootingStars.splice(i, 1);
            }
          }
        }
        this.timerAnimationFrame = requestAnimationFrame(this.update);
      }

    // 星空代码
    runStarrySky() {
      for (let j = 0; j < this.layers.length; j++) {
        const layer = this.layers[j];
        for (let i = 0; i < layer.count; i++) {
          const star = this.particle.create(this.randomRange(0, this.width), this.randomRange(0, this.height), 0, 0, this.randomColor(1));
          star.radius = this.starBaseRadius * layer.scale;
          this.particle.setSpeed(star, layer.speed);
          this.particle.setHeading(star, this.degreesToRads(this.starsAngle));
          this.stars.push(star);
        }
      }
    }
}

window.genalChat = (genalChat = new GenalChat());
genalChat.start();

// setTimeout(genalChat.destory, 10000)

</script>
```
