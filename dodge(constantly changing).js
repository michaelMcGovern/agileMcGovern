var canvas;
var ctx;
var framerate = 60;
var speed = 5;
var dx = 0;
var dy = 0;
var count = 1;
var WIDTH;
var HEIGHT;
var x;
var y;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var monsters = []

// Important starting function
function init() {
    canvas = document.getElementById("game");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = game.getContext("2d");

    WIDTH = game.width;
    HEIGHT = game.height;
    x = WIDTH/2;
    y = HEIGHT/2;

    return setInterval(frame, 1000/framerate);
}

function randint(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.fill();
}

function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function move() {
    dx = 0;
    dy = 0;
    if (upPressed) {
        dy -= speed;
    } if (downPressed) {
        dy += speed;
    } if (leftPressed) {
        dx -= speed;
    } if (rightPressed) {
        dx += speed;
    }
    if (Math.abs(dx) + Math.abs(dy) > speed) {
        dx /= 2;
        dy /= 2;
        if (dx > 0) {
            dx += 1;
        } else {
            dx -= 1;
        } if (dy > 0) {
            dy += 1;
        } else {
            dy -= 1;
        }
    }
    y += dy;
    x += dx;
    if (y < 0) {
        y = 0;
    } if (x < 0) {
        x = 0;
    } if (y > HEIGHT) {
        y = HEIGHT
    } if (x > WIDTH) {
        x = WIDTH
    }

    for (var i = monsters.length-1; i >= 0; i--) {
        if (!monsters[i].dead) {
            monsters[i].moveMonster();
        } else {
            monsters.splice(i, 1);
        }
    }
}



function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "rgb(240, 240, 240)";
    rect(0 ,0, WIDTH, HEIGHT);
    ctx.fillStyle = "rgb(80, 0, 30)";
    circle(x-5, y-5, 10);

    ctx.fillStyle = "rgb(30, 0, 80)";
    for (var i = 0; i < monsters.length; i++) {
        monsters[i].drawMonster();
    }

    ctx.font = "42px Arial Black";
    ctx.fillText(count, WIDTH/2-(15*count.toString().length), 40);
}

function frame() {
    if (count % 8 == 0) {
        monsters.push(new Monster());
    }
    move();
    draw();
    count++;
}

// Main part of program
init();
window.addEventListener('keydown', keyDown, true);
window.addEventListener('keyup', keyUp, true);
