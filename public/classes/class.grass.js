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