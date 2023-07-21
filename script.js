function Player(name, lvl, points) {
    this.name = name
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXP = function (number) {
    this.points += number;
    if (this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }
}

Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`
}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXP(5);
player2.gainXP(7);
player1.gainXP(5);
player2.gainXP(1);
player1.gainXP(7);
player2.gainXP(9);
player1.gainXP(5);
player2.gainXP(9);
console.log(player1.describe());
console.log(player2.describe());