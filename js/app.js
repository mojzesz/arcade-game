// Enemies our player must avoid

var Enemy = function (row, spd, x) {
    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    this.spd = spd;
    this.x = x;
    if (row === 1) {
        this.y = 239;
    } else if (row === 2) {
        this.y = 156;
    } else {
        this.y = 73;
    }
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //
    
    this.sprite = 'img/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function (dt) {
    
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    if (this.x > 460) {
        this.x = -30;
    } else {
        this.x += (101 * dt * this.spd);
    }
    this.render();
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.x = 200;
    this.y = 405;
    this.life = 3;
    this.sprite = (choosePlayer)();
}
var choosePlayer = function () {
    var str = "CHOOSE YOUR CHARACTER:\n \n1 BOY \n2 PINKY\n3 WITCH\n4 CATGIRL\n5 PRINCESS\n"
    var char = prompt(str);
    switch (char) {
        case "1":
            return "img/char-boy.png";
            break;
        case "2":
            return 'img/char-pink-girl.png';
            break;
        case "3":
            return 'img/char-horn-girl.png';
            break;
        case "4":
            return 'img/char-cat-girl.png';
            break;
        case "5":
            return 'img/char-princess-girl.png';
            break;
        default:
            return "img/char-boy.png";
            break;
    }
};
var choosePlayerUI = function () {
    context.save();
    context.restore();
};

Player.prototype.update = function (x, y) {
    if (x !== undefined && y !== undefined) {
        this.x = x;
        this.y = y;
    } else if (y === undefined && x !== undefined) {
        this.x = x;
    } else if (x === undefined && y !== undefined) {
        this.y = y;
    }

    this.render();
};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (key) {

    if (key === 'left') {
        if (this.x !== -2) {
            this.x -= 101;
        }
    } else if (key === 'up') {
        if (this.y !== -10) {
            this.y -= 83;
        }
    } else if (key === 'down') {
        if (this.y !== 405) {
            this.y += 83;
        }
    } else if (key === 'right') {
        if (this.x !== 402) {
            this.x += 101;
        }
    }
};

Player.prototype.reset = function () {
    this.x = 200;
    this.y = 405;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(1, 1.2, -10);
var enemy2 = new Enemy(1, 3.1, -400);
var enemy3 = new Enemy(2, 1.9, -20);
var enemy4 = new Enemy(2, 1.3, -150);
var enemy5 = new Enemy(3, 1.7, -300);
var enemy6 = new Enemy(3, 3.5, -5);

var allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);
allEnemies.push(enemy5);
allEnemies.push(enemy6);

var player = new Player();

// This listens for key presses and sends the keys to your

// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
