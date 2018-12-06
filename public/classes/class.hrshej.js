class Hrshej{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.index = 7;
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
    eat() {
        var noramucutyun = Math.floor(Random([6]))
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if (noramucutyun == 6) {
            if (newCell) {
                matrix[this.y][this.x] = 0;
                matrix[newCell[1]][newCell[0]] = 7;
                this.x = newCell[0];
                this.y = newCell[1];
                this.energy += 6;
                for (var i in FireArr) {
                    if (newCell[0] == FireArr[i].x && newCell[1] == FireArr[i].y) {
                        FireArr.splice(i, 1);
                        break;
                    }
                }
            }
            if (this.energy >= 45) {
                this.mul();
            }
            else {
                this.move()
            }
        }
        
    }
    move() {
        var noramucutyun = Math.floor(Random([0]))
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if (this.energy <= 0) {
            this.die()
        }
        else if(this.energy >= 45) {
            this.mul();
        }
        else if (noramucutyun == 0) {
            if (p.innerText == 'garun') {
                if (newCell) {
                    matrix[this.y][this.x] = this.lastIndex;
                    matrix[newCell[1]][newCell[0]] = 7;
                    this.x = newCell[0];
                    this.y = newCell[1];
                    this.energy -= 3;
                    this.lastIndex = 0;
                }
            }
            else if (p.innerText == 'amar') {
                if (newCell) {
                    matrix[this.y][this.x] = this.lastIndex;
                    matrix[newCell[1]][newCell[0]] = 7;
                    this.x = newCell[0];
                    this.y = newCell[1];
                    this.energy -= 2;
                    this.lastIndex = 0;
                }
            }
            else if (p.innerText == 'ashun') {
                if (newCell) {
                    matrix[this.y][this.x] = this.lastIndex;
                    matrix[newCell[1]][newCell[0]] = 7;
                    this.x = newCell[0];
                    this.y = newCell[1];
                    this.energy -= 4;
                    this.lastIndex = 0;
                }
            }
            else {
                if (newCell) {
                    matrix[this.y][this.x] = this.lastIndex;
                    matrix[newCell[1]][newCell[0]] = 7;
                    this.x = newCell[0];
                    this.y = newCell[1];
                    this.energy -= 5;
                    this.lastIndex = 0;
                }
            }
        }
    }

    mul() {
        var noramucutyun = Random([0,1,6])
        var EmptyCells = this.ChooseCell(noramucutyun);
        var newCell = random(EmptyCells);
        if(newCell && noramucutyun == 0){
            this.die();
        }
        if(newCell && noramucutyun == 1){
            this.die();
        }
        if (p.innerText == 'garun') {
            if (newCell) {
                var newHrshej = new Hrshej(newCell[0], newCell[1]);
                HrshejArr.push(newHrshej);
                for (var i in FireArr) {
                    if (newCell[0] == FireArr[i].x && newCell[1] == FireArr[i].y) {
                        FireArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 7;
                this.energy -= 21;
            }
        }
        else if (p.innerText == 'amar') {
            if (newCell) {
                var newHrshej = new Hrshej(newCell[0], newCell[1]);
                HrshejArr.push(newHrshej);
                for (var i in FireArr) {
                    if (newCell[0] == FireArr[i].x && newCell[1] == FireArr[i].y) {
                        FireArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 7;
                this.energy -= 24;
            }
        }
        else if (p.innerText == 'ashun') {
            if (newCell) {
                var newHrshej = new Hrshej(newCell[0], newCell[1]);
                HrshejArr.push(newHrshej);
                for (var i in FireArr) {
                    if (newCell[0] == FireArr[i].x && newCell[1] == FireArr[i].y) {
                        FireArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 7;
                this.energy -= 27;
            }
        }
        else if (p.innerText == 'dzmer') {
            if (newCell) {
                var newHrshej = new Hrshej(newCell[0], newCell[1]);
                HrshejArr.push(newHrshej);
                for (var i in FireArr) {
                    if (newCell[0] == FireArr[i].x && newCell[1] == FireArr[i].y) {
                        FireArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newCell[1]][newCell[0]] = 7;
                this.energy -= 35;
            }
        }
    }


    die() {
        for (var i in HrshejArr) {
            if (this.energy <= 0) {
                if (this.x == HrshejArr[i].x && this.y == HrshejArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    HrshejArr.splice(i, 1);
                }
            }
        }
    }
}