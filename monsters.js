function Monster() {
    this.radius = randint(15, 40);
    this.dead = false;
    this.side = randint(1, 4);
    //1 in 4 will start on left side
    if (this.side == 1) {
        this.dx = randint(1, 5);
        this.dy = randint(-2, 2);
        this.x = 0 - this.radius*2;
        this.y = randint(0, HEIGHT);
    //1 in 4 will start on right side
    } else if (this.side == 2) {
        this.dx = randint(-5, -1);
        this.dy = randint(-2, 2);
        this.x = WIDTH + this.radius*2;
        this.y = randint(0, HEIGHT);
    //1 in 4 will start on bottom side
    } else if (this.side == 3) {
        this.dx = randint(-2, 2);
        this.dy = randint(1, 5);
        this.x = randint(0, WIDTH);
        this.y = 0 - this.radius*2;
    //1 in 4 will start on top side
    } else if (this.side == 4) {
        this.dx = randint(-2, 2);
        this.dy = randint(-5, -1);
        this.x = randint(0, WIDTH);
        this.y = HEIGHT + this.radius*2;
    }
}

Monster.prototype.moveMonster = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > WIDTH + this.radius*2 || this.x < 0 - this.radius*2
    || this.y > HEIGHT + this.radius*2 || this.y < 0 - this.radius*2) {
        this.dead = true;
    }
}

Monster.prototype.drawMonster = function() {
    circle(this.x - this.radius/2, this.y - this.radius/2, this.radius);
}
