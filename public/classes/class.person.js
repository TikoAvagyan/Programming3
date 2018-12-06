class Person {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 24;
        this.index = 4;
        this.lastIndex = 0;
    }
    ChooseCell(ch) {
        this.GetNew()
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
        var noramucutyun = Math.floor(Random([0, 1]))
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if (noramucutyun == 0) {
            if (newCell) {
                matrix[this.y][this.x] = this.lastIndex;
                matrix[newCell[1]][newCell[0]] = 4;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy--;
                this.lastIndex = 0;
            }
        }
        else if (noramucutyun == 1) {
            if (newCell) {
                matrix[this.y][this.x] = this.lastIndex;
                matrix[newCell[1]][newCell[0]] = 4;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy--;
                this.lastIndex = 1;
            }
        }
    }
    eat() {
        var noramucutyun = Math.floor(Random([2, 3]))
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if (noramucutyun == 2) {
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 4;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy += 2;
                for (var i in xotakerArr) {
                    if (newCell[0] == xotakerArr[i].x && newCell[1] == xotakerArr[i].y) {
                        xotakerArr.splice(i, 1);
                        break;
                    }
                }
                if (this.energy >= 32) {
                    this.mul()
                }
            }
            else {
                this.move()
                this.die()
            }
        }
        else if (noramucutyun == 3) {
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 4;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy += 3;
                for (var i in gishatichArr) {
                    if (newCell[0] == gishatichArr[i].x && newCell[1] == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
                if (this.energy >= 32) {
                    this.mul()
                }
            }
            else {
                this.move()
                this.die()
            }
        }
    }
    mul() {
        var EmptyCells = this.ChooseCell(0);
        var newCell = random(EmptyCells);
        if (newCell) {
            var newPerson = new Person(newCell[0], newCell[1]);
            PersonArr.push(newPerson);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy -= 18
        }
    }


    die() {
        for (var i in PersonArr) {
            if (this.energy <= 0) {
                if (this.x == PersonArr[i].x && this.y == PersonArr[i].y) {
                    matrix[this.y][this.x] = 0
                    PersonArr.splice(i, 1)
                }
            }
        }
    }
}