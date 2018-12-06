class Fire {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 6;
        this.firetact = 0;

    }

    stanalNorKordinatnerFire() {
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

    yntrelVandak(ch) {
        this.stanalNorKordinatnerFire();
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

    sharjvelFire() {
        this.firetact++;
        var norVandak = random(this.yntrelVandak(0));

        if (this.firetact >= 7 && norVandak) {
            matrix[this.y][this.x] = 6;
            matrix[norVandak[1]][norVandak[0]] = 6;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.firetact = 0;
        }
    }

    utelFire() {
        this.firetact++;
        var norVandakxot = random(this.yntrelVandak(1));
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.5));
        var norVandakGishatich = random(this.yntrelVandak(3));
        var norVandakGishatich2 = random(this.yntrelVandak(3.5));
        var norVandakMard = random(this.yntrelVandak(4));

        if (this.firetact >= 7 && norVandakxot) {
            matrix[this.y][this.x] = 6;
            this.x = norVandakxot[0];
            this.y = norVandakxot[1];
            this.firetact = 0;
            var norFire = new Fire(norVandakxot[0], norVandakxot[1]);
            FireArr.push(norFire);
            matrix[norVandakxot[1]][norVandakxot[0]] = 6;
        }
        else if (this.firetact >= 7 && norVandak) {
            matrix[this.y][this.x] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.firetact = 0;
            var norFire = new Fire(norVandak[0], norVandak[1]);
            FireArr.push(norFire);
            matrix[norVandak[1]][norVandak[0]] = 6;
        }
        else if (this.firetact >= 7 && norVandak2) {
            matrix[this.y][this.x] = 6;
            this.x = norVandak2[0];
            this.y = norVandak2[1];
            this.firetact = 0;
            var norFire = new Fire(norVandak2[0], norVandak2[1]);
            FireArr.push(norFire);
            matrix[norVandak2[1]][norVandak2[0]] = 6;
        }
        else if (this.firetact >= 7 && norVandakGishatich) {
            matrix[this.y][this.x] = 6;
            this.x = norVandakGishatich[0];
            this.y = norVandakGishatich[1];
            this.firetact = 0;
            var norFire = new Fire(norVandakGishatich[0], norVandakGishatich[1]);
            FireArr.push(norFire);
            matrix[norVandakGishatich[1]][norVandakGishatich[0]] = 6;
        }
        else if (this.firetact >= 7 && norVandakGishatich2) {
            matrix[this.y][this.x] = 6;
            this.x = norVandakGishatich2[0];
            this.y = norVandakGishatich2[1];
            this.firetact = 0;
            var norFire = new Fire(norVandakGishatich2[0], norVandakGishatich2[1]);
            FireArr.push(norFire);
            matrix[norVandakGishatich2[1]][norVandakGishatich2[0]] = 6;
        }

        else if (this.firetact >= 7 && norVandakMard) {
            matrix[this.y][this.x] = 6;
            this.x = norVandakMard[0];
            this.y = norVandakMard[1];
            this.firetact = 0;
            var norFire = new Fire(norVandakMard[0], norVandakMard[1]);
            FireArr.push(norFire);
            matrix[norVandakMard[1]][norVandakMard[0]] = 6;
        }
        else {
            this.sharjvelFire();
        }
    }
}