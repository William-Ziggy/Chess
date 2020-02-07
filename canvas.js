class King {

    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 0;
        this.sy = 0;
        this.sWidth=320;
        this.sHeight=320;
    }
}
class Queen {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 320;
        this.sy = 0;
        this.sWidth=320;
        this.sHeight=320;
    }
}
class Rook {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 1280;
        this.sy = 0;
        this.sWidth=320;
        this.sHeight=320;
    }
}
class Bishop {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 640;
        this.sy = 0;
        this.sWidth=320;
        this.sHeight=320;
    }
}
class Knight {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 960;
        this.sy = 0;
        this.sWidth=320;
        this.sHeight=320;
    }
}
class Pawn {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 1600;
        this.sy = 0;
        this.sWidth=320;
        this.sHeight=320;
    }
}


var canvas = document.querySelector('canvas');
window.addEventListener("resize", repaint);

var sprite = new Image();
sprite.src = "./chess_pieces.png";

wPawn1 = new Pawn(0, 6, 1, 1);
wPawn2 = new Pawn(1, 6, 1, 1);
wPawn3 = new Pawn(2, 6, 1, 1);
wPawn4 = new Pawn(3, 6, 1, 1);
wPawn5 = new Pawn(4, 6, 1, 1);
wPawn6 = new Pawn(5, 6, 1, 1);
wPawn7 = new Pawn(6, 6, 1, 1);
wPawn8 = new Pawn(7, 6, 1, 1);
wRook1 = new Rook(0, 7, 1, 1);
wRook2 = new Rook(7, 7, 1, 1);
wKnight1 = new Knight(1, 7, 1, 1);
wKnight2 = new Knight(6, 7, 1, 1);
wBishop1 = new Bishop(2, 7, 1, 1);
wBishop2 = new Bishop(5, 7, 1, 1);
wQueen = new Queen(3, 7, 1, 1);
wKing = new King(4, 7, 1, 1);

const pieces = [wPawn1, wPawn2, wPawn3, wPawn4, wPawn5, wPawn6, wPawn7, wPawn8, wRook1, wRook2, wKnight1, wKnight2, wBishop1, wBishop2, wQueen, wKing];
repaint();

function repaint(){

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext("2d");

    var boardSize = winHeight/1.5;

    var centerX = winWidth/2;
    var centerY = winHeight/2;

    var d = -1;
    var offset=0;

    var bCornerX = (centerX-boardSize/2);
    var bCornerY = (centerY-boardSize/2);
    var sSize = boardSize/8;


    //Draw board:
    for(i=0; i<8; i++){
        for(j=0; j<8; j++){
            if((j+offset)%2==0){
                c.fillStyle = "white";
            }else{
                c.fillStyle = "black";
            }
            var x = bCornerX + i*sSize;
            var y = bCornerY + j*sSize;
            c.fillRect(x, y, sSize, sSize)
        }
        offset+=1;
    }
    drawPieces(c, sSize, bCornerX, bCornerY);

    //c.drawImage(sprite, 20, 20, 600, 200);
}

function drawPieces(c, sSize, bCornerX, bCornerY){

        if (!sprite.complete){
            setTimeout(function(){
                drawPieces(c, sSize, bCornerX, bCornerY)
            }, 50);
            return;
        }
        for(var i=0; i<pieces.length; i++){
            c.drawImage(sprite, pieces[i].sx, pieces[i].sy, pieces[i].sWidth, pieces[i].sHeight, bCornerX+pieces[i].i*sSize, bCornerY+pieces[i].j*sSize, sSize, sSize);
        }


}
