class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = 2;
    }
    ChooseCell(ch) {
        this.GetNew();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }

    GetNew() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    
    move() {
        if (p.innerText == 'dzmer') {
            var EmptyCells = this.ChooseCell(0);
            var newCell = random(EmptyCells);
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 2;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy -= 2;
            }
        }
        else {
            var EmptyCells = this.ChooseCell(0);
            var newCell = random(EmptyCells);
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 2;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy--;
            }
        }
    }

    eat() {
        if (p.innerText == 'dzmer') {
            var EmptyCells = this.ChooseCell(1);
            var newCell = random(EmptyCells);
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 2;

                for (var i in xotArr) {
                    if (newCell[0] == xotArr[i].x && newCell[1] == xotArr[i].y) {
                        xotArr.splice(i, 1);
                        break;
                    }
                }
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy += 3

                if (this.energy >= 15) {
                    this.mul()
                }
            }
            else {
                this.move();
                this.die()
            }
        }
        else {
            var EmptyCells = this.ChooseCell(1);
            var newCell = random(EmptyCells);
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 2;

                for (var i in xotArr) {
                    if (newCell[0] == xotArr[i].x && newCell[1] == xotArr[i].y) {
                        xotArr.splice(i, 1);
                        break;
                    }
                }

                this.x = newCell[0];
                this.y = newCell[1];
                this.energy += 1

                if (this.energy >= 12) {
                    this.mul()
                }
            }
            else {
                this.move();
                this.die()
            }
        }

    }

    mul() {
        var EmptyCells = this.ChooseCell(0);
        var newCell = random(EmptyCells);
        if (newCell) {
            var norXotaker = new Xotaker(newCell[0], newCell[1]);
            xotakerArr.push(norXotaker);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy -= 6;
        }

    }

    die() {
        for (var i in xotakerArr) {
            if (this.energy <= 0) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    matrix[this.y][this.x] = 0
                }
            }
        }
        //console.log("merav xotakery")
    }
}