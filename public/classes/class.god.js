class God {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.kadr = 590;
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
        var noramucutyun = Math.floor(Random([0, 1, 6]))
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if (this.energy >= 5) {
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
        else if (noramucutyun == 6) {
            console.log('lollll')
            if (newCell) {
                matrix[this.y][this.x] = this.lastIndex;
                matrix[newCell[1]][newCell[0]] = 5;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy++;
                this.kadr--;
                this.lastIndex = 0;
                for (var i in FireArr) {
                    if (newCell[0] == FireArr[i].x && newCell[1] == FireArr[i].y) {
                        FireArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }

    mul() {
        var noramucutyun = Random([0, 1, 6])
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if (noramucutyun == 0) {
            if (newCell) {
                var kerpar = Random([1, 2, 3, 4])
                if (kerpar == 1) {
                    var norXot = new Grass(newCell[0], newCell[1]);
                    xotArr.push(norXot);
                    matrix[newCell[1]][newCell[0]] = 1;
                    this.energy = 0;
                }
                else if (kerpar == 2) {
                    var norXotaker = new Xotaker(newCell[0], newCell[1]);
                    xotakerArr.push(norXotaker);
                    matrix[newCell[1]][newCell[0]] = 2;
                    this.energy = 0
                }
                else if (kerpar == 3) {
                    var norgishatich = new Gishatich(newCell[0], newCell[1]);
                    gishatichArr.push(norgishatich);
                    matrix[newCell[1]][newCell[0]] = 3;
                    this.energy = 0
                }
                else if (kerpar == 4) {
                    var newPerson = new Person(newCell[0], newCell[1]);
                    PersonArr.push(newPerson);
                    matrix[newCell[1]][newCell[0]] = 4;
                    this.energy = 0
                }

            }
        }
        else if (noramucutyun == 1) {
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
                    this.energy = 0;
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
        else if (noramucutyun == 6) {
            if (newCell) {
                var kerpar = Random([7])
                if (kerpar == 7) {
                    var newHrshej = new Hrshej(newCell[0], newCell[1]);
                    HrshejArr.push(newHrshej);
                    for (var i in FireArr) {
                        if (newCell[0] == FireArr[i].x && newCell[1] == FireArr[i].y) {
                            FireArr.splice(i, 1);
                            break;
                        }
                    }
                    matrix[newCell[1]][newCell[0]] = 4;
                    this.energy = 0
                }
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
