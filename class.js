function Random(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
    mul() {
        this.multiply += 2;
        var noramucutyun = Random([0])
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells)

        if (this.multiply >= 8 && newCell) {
            var norXot = new Grass(newCell[0], newCell[1]);
            xotArr.push(norXot);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }


    ChooseCell(ch) {
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
}



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
    eat() {
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
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 22;
        this.index = 3;
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
        var noramucutyun = Random([0, 1]);
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if (noramucutyun == 0) {
            if (newCell) {
                matrix[this.y][this.x] = this.lastIndex;
                matrix[newCell[1]][newCell[0]] = 3;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy--;
                this.lastIndex = 0;
            }
        }
        else if (noramucutyun == 1) {
            if (newCell) {
                matrix[this.y][this.x] = this.lastIndex;
                matrix[newCell[1]][newCell[0]] = 3;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy--;
                this.lastIndex = 1;
            }
        }
    }
    eat() {
        var EmptyCells = this.ChooseCell(2);
        var newCell = random(EmptyCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];
            this.energy += 3;
            for (var i in xotakerArr) {
                if (newCell[0] == xotakerArr[i].x && newCell[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 28) {
                this.mul()
            }
        }
        else {
            this.move()
            this.die()
        }
    }
    mul() {
        var EmptyCells = this.ChooseCell(0);
        var newCell = random(EmptyCells);
        if (newCell) {
            var norgishatich = new Gishatich(newCell[0], newCell[1]);
            gishatichArr.push(norgishatich);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy -= 10
        }
    }


    die() {
        for (var i in gishatichArr) {
            if (this.energy <= 0) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    matrix[this.y][this.x] = 0
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}



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

class God {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.kadr = 400
        this.index = 5;
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
        if (this.energy >= 12) {
            this.mul();
        }
        else if (this.kadr <= 0) {
            this.die()
        }
        else if (noramucutyun == 0) {
            if (newCell) {
                matrix[this.y][this.x] = this.lastIndex;
                matrix[newCell[1]][newCell[0]] = 5;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy++;
                this.kadr--
                this.lastIndex = 0;
            }
        }
        else if (noramucutyun == 1) {
            if (newCell) {
                matrix[this.y][this.x] = this.lastIndex;
                matrix[newCell[1]][newCell[0]] = 5;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy++;
                this.kadr--;
                this.lastIndex = 1;
            }
        }
    }

    mul() {
        var EmptyCells = this.ChooseCell(1);
        var newCell = random(EmptyCells);
        if (newCell) {
            var kerpar = Random([1, 2, 3, 4])
            if (kerpar == 1) {
                var norXot = new Grass(newCell[0], newCell[1]);
                xotArr.push(norXot);
                for (var i in xotArr) {
                    if (newCell[0] == xotArr[i].x && newCell[1] == xotArr[i].y) {
                        xotArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 1;
                this.multiply = 0;
            }
            else if (kerpar == 2) {
                var norXotaker = new Xotaker(newCell[0], newCell[1]);
                xotakerArr.push(norXotaker);
                for (var i in xotArr) {
                    if (newCell[0] == xotArr[i].x && newCell[1] == xotArr[i].y) {
                        xotArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 2;
                this.energy = 0
            }
            else if (kerpar == 3) {
                var norgishatich = new Gishatich(newCell[0], newCell[1]);
                gishatichArr.push(norgishatich);
                for (var i in xotArr) {
                    if (newCell[0] == xotArr[i].x && newCell[1] == xotArr[i].y) {
                        xotArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 3;
                this.energy = 0
            }
            else if (kerpar == 4) {
                var newPerson = new Person(newCell[0], newCell[1]);
                PersonArr.push(newPerson);
                for (var i in xotArr) {
                    if (newCell[0] == xotArr[i].x && newCell[1] == xotArr[i].y) {
                        xotArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 4;
                this.energy = 0
            }
        }

    }


    die() {
        for (var i in GodArr) {
            if (this.kadr <= 0) {
                if (this.x == GodArr[i].x && this.y == GodArr[i].y) {
                    matrix[this.y][this.x] = 0
                    GodArr.splice(i, 1)
                }
            }
        }
    }
}
