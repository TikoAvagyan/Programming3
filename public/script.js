var socket = io.connect('http://localhost:4444');

function Random(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
}




var matrix = [
    [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
    [0, 2, 2, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 3, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 0, 2, 0, 0, 2, 2, 0, 0, 0, 1, 1, 0, 0, 2, 0, 1, 0, 1, 1],
    [1, 0, 0, 3, 0, 0, 1, 0, 2, 2, 0, 2, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 2, 0, 1, 2, 0, 1, 1, 0, 2, 0, 0, 2, 2, 1],
    [0, 1, 1, 0, 0, 2, 0, 0, 3, 0, 0, 2, 1, 0, 0, 0, 1, 1, 0, 2, 2, 0, 2, 0, 0, 2, 1, 1, 2, 0, 1, 1, 0, 0, 0, 2],
    [2, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 3, 1, 1, 2, 1, 0, 0, 1, 0, 2, 1],
    [0, 0, 2, 2, 1, 0, 2, 0, 1, 0, 1, 1, 1, 0, 0, 2, 0, 0, 2, 2, 0, 0, 3, 1, 1, 0, 2, 0, 2, 0, 1, 0, 0, 0, 1, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 1, 0, 0, 1, 2, 0, 2, 1, 2, 0, 0, 3, 2, 1, 0, 1, 0, 1, 1, 1, 0, 0, 2],
    [2, 0, 1, 0, 2, 2, 0, 0, 0, 4, 1, 4, 1, 1, 2, 2, 4, 4, 4, 1, 0, 0, 0, 0, 3, 0, 2, 1, 1, 0, 2, 1, 2, 0, 1, 0],
    [0, 1, 2, 1, 0, 3, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 2, 2, 0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 0, 1],
    [0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 3, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 3, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 2, 2, 0, 1, 0, 1, 1, 0, 2, 2, 0, 0, 0, 2, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 3, 0, 1, 0, 1, 1, 2, 0, 0, 2, 0, 0, 2, 2, 0, 1, 2, 2, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 3, 1, 1, 2, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 4, 4, 4, 2, 2, 0, 1, 0, 1, 1, 2, 1, 0, 2, 0, 0],
    [0, 2, 2, 2, 0, 0, 0, 3, 0, 0, 1, 6, 0, 1, 2, 1, 0, 0, 2, 1, 1, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 2, 1, 0, 0, 1],
    [0, 0, 1, 1, 2, 2, 4, 2, 1, 4, 4, 4, 4, 0, 0, 3, 2, 1, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 2, 1, 0, 3, 2, 2, 0],
    [0, 1, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 2, 0, 0, 2, 1, 0, 3, 2, 0, 0, 0, 0, 1, 2, 0, 1, 1, 1, 0, 0, 1, 2, 2, 1],
    [2, 0, 1, 0, 2, 2, 2, 0, 0, 0, 1, 0, 1, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 2, 1, 1, 1, 0, 3, 0],
    [2, 2, 1, 0, 2, 0, 1, 2, 1, 0, 0, 0, 3, 2, 0, 1, 0, 2, 0, 1, 0, 1, 1, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 3, 0, 0, 0, 1, 1, 0, 0, 2, 0, 2, 0, 0, 1, 4, 0, 1, 3, 2, 1, 0, 3, 2, 1, 0, 2, 0, 0, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 1, 3, 0, 1, 2, 2, 0, 3, 0, 1, 1, 5, 0, 3, 2, 1, 1, 0, 2, 2, 1, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 2, 2, 0, 1, 0, 0, 1, 1, 4, 1, 1, 1, 1, 4, 4, 1, 0, 1, 0, 1, 0, 0, 1, 0, 3, 1, 0, 1, 0, 1, 3],
    [0, 1, 1, 0, 3, 4, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 3, 0, 0, 1, 1, 1, 0, 2, 0, 0, 0, 1, 1, 1, 2, 2, 0, 0, 0, 1, 1, 1, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 1, 2, 0, 1, 2, 0, 0, 1, 0, 1, 1, 0, 2, 2, 1, 3, 1, 0, 1, 2, 1, 0, 2],
    [0, 1, 2, 2, 0, 0, 2, 2, 2, 1, 0, 0, 0, 0, 2, 3, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 3, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 2, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 1, 2],
    [0, 1, 1, 2, 1, 2, 0, 0, 1, 0, 2, 2, 0, 1, 0, 2, 2, 2, 1, 0, 2, 2, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 1, 0, 0, 2, 0, 1, 0, 2, 1, 2, 1, 0, 2, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 0],
]
//hwahzx
var timer = 0;
var side = 14;
var xotArr = [];
var xotakerArr = []
var gishatichArr = []
var PersonArr = [];
var GodArr = [];
var FireArr = [];
var HrshejArr = [];

function setup() {
    frameRate(60)
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var xot = new Grass(x, y, 1);
                xotArr.push(xot);
            }
            else if (matrix[y][x] == 2) {
                var xotaker = new Xotaker(x, y)
                xotakerArr.push(xotaker)
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y)
                gishatichArr.push(gishatich)
            }
            else if (matrix[y][x] == 4) {
                var newPerson = new Person(x, y);
                PersonArr.push(newPerson);
            }
            else if (matrix[y][x] == 5) {
                var newGod = new God(x, y);
                GodArr.push(newGod);
            }
            else if (matrix[y][x] == 6) {
                var norfire = new Fire(x, y);
                FireArr.push(norfire);
            }
            else if (matrix[y][x] == 7) {
                var newHrshej = new Hrshej(x, y);
                HrshejArr.push(newHrshej);
            }

        }
    }

}

var statistics;
function draw() {

    if (frameCount % 60 == 0) {

        statistics = {
            "framenumber": frameCount,
            "xot": xotArr.length,
            "xotaker": xotakerArr.length,
            "gishatich": gishatichArr.length,
            "mard": PersonArr.length,
            "astvac": GodArr.length,
            "fire": FireArr.length
        }
        socket.emit("send data", statistics);
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("darkgreen");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#d12200");
                rect(x * side, y * side, side, side);
            }
        }
    }

    var p = document.getElementById("p");
    if (frameCount % 90 >= 0 && frameCount % 90 < 25) {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("darkgreen");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill('purple');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#d12200');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('#1cff3a');
                    rect(j * side, i * side, side, side);
                }
            }
        }
        p.innerText = "garun";
    }
    else if (frameCount % 90 >= 25 && frameCount % 90 < 50) {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill('#dee589');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill('yellow');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#c17d00');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('#080551');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('#efc382');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill('purple');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#d12200');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('#1cff3a');
                    rect(j * side, i * side, side, side);
                }
            }
        }
        p.innerText = "amar";
    }
    else if (frameCount % 90 >= 50 && frameCount % 90 < 75) {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("#9b7625");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill('#f2ee2b');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#d68b4f');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('#1f74ad');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('#e58a0b');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill('purple');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#d12200');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('#1cff3a');
                    rect(j * side, i * side, side, side);
                }
            }
        }
        p.innerText = "ashun";
    }
    else if (frameCount % 90 >= 75 && frameCount % 90 <= 90) {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("#d1fdff");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("#ed5604");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#b5f4ee');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('#8f04ed');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('#ed9f04');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill('purple');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#d12200');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('#1cff3a');
                    rect(j * side, i * side, side, side);
                }
            }
        }
        var a = 'dzmer'
        p.innerText = a
    }
    if (a != 'dzmer') {
        for (var i in xotArr) {
            xotArr[i].mul();
        }
        for (var i in xotakerArr) {
            xotakerArr[i].eat();
        }
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }
        for (var i in PersonArr) {
            PersonArr[i].eat();
        }
        for (var i in GodArr) {
            GodArr[i].move();
        }
        for (var i in HrshejArr) {
            HrshejArr[i].eat();
        }

        for (var t in FireArr) {
            FireArr[t].utelFire();

            for (var z in xotArr) {
                if (xotArr[z].x == FireArr[t].x && xotArr[z].y == FireArr[t].y) {
                    xotArr.splice(z, 1);
                    break;
                }
            }
            for (var e in xotakerArr) {
                if (xotakerArr[e].x == FireArr[t].x && xotakerArr[e].y == FireArr[t].y) {
                    xotakerArr.splice(e, 1);
                    break;
                }
            }
            for (var d in gishatichArr) {
                if (gishatichArr[d].x == FireArr[t].x && gishatichArr[d].y == FireArr[t].y) {
                    gishatichArr.splice(d, 1);
                    break;
                }
            }
            for (var h in PersonArr) {
                if (PersonArr[h].x == FireArr[t].x && PersonArr[h].y == FireArr[t].y) {
                    PersonArr.splice(h, 1);
                    break;
                }
            }
        }
    }

    else {

        for (var i in xotakerArr) {
            xotakerArr[i].eat();
        }
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }
        for (var i in PersonArr) {
            PersonArr[i].eat();
        }
        for (var i in GodArr) {
            GodArr[i].move();
        }
        for (var i in HrshejArr) {
            HrshejArr[i].eat();
        }
    }
    if (frameCount >= 600) {
        p.innerText = 'The end';
        background('black');
        frameRate(0)
    }

}
