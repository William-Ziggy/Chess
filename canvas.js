class King {

    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 0;
        this.sWidth=320;
        this.sHeight=320;
        if (white==1) {
            this.sy = 0;
        }else{
            this.sy = 320;
        }
    }
}
class Queen {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 320;
        this.sWidth=320;
        this.sHeight=320;
        if (white==1) {
            this.sy = 0;
        }else{
            this.sy = 320;
        }
    }
}
class Rook {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 1280;
        this.sWidth=320;
        this.sHeight=320;
        if (white==1) {
            this.sy = 0;
        }else{
            this.sy = 320;
        }
    }
}
class Bishop {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 640;
        this.sWidth=320;
        this.sHeight=320;
        if (white==1) {
            this.sy = 0;
        }else{
            this.sy = 320;
        }
    }
}
class Knight {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 960;
        this.sWidth=320;
        this.sHeight=320;
        if (white==1) {
            this.sy = 0;
        }else{
            this.sy = 320;
        }
    }
}
class Pawn {
    constructor(i, j, alive, white) {
        this.i = i;
        this.j = j;
        this.alive = alive;
        this.white = white;

        this.sx = 1600;
        this.sWidth=320;
        this.sHeight=320;
        if (white==1) {
            this.sy = 0;
        }else{
            this.sy = 320;
        }
    }
}


var canvas = document.querySelector('canvas');
window.addEventListener("resize", repaint);

var sprite = new Image();
sprite.src = "./chess_pieces.png";

wPawn1 = new Pawn(0, 6, 1, 1);
wPawn2 = new Pawn(1, 6, 1, 1);
wPawn3 = new Pawn(2, 6, 1, 1);
wPawn4 = new Pawn(3, 4, 1, 1);
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

const wPieces = [wPawn1, wPawn2, wPawn3, wPawn4, wPawn5, wPawn6, wPawn7, wPawn8, wRook1, wRook2, wKnight1, wKnight2, wBishop1, wBishop2, wQueen, wKing];

bPawn1 = new Pawn(0, 1, 1, 0);
bPawn2 = new Pawn(1, 1, 1, 0);
bPawn3 = new Pawn(2, 1, 1, 0);
bPawn4 = new Pawn(3, 1, 1, 0);
bPawn5 = new Pawn(4, 1, 1, 0);
bPawn6 = new Pawn(5, 1, 1, 0);
bPawn7 = new Pawn(6, 1, 1, 0);
bPawn8 = new Pawn(7, 1, 1, 0);
bRook1 = new Rook(0, 0, 1, 0);
bRook2 = new Rook(7, 0, 1, 0);
bKnight1 = new Knight(1, 0, 1, 0);
bKnight2 = new Knight(6, 0, 1, 0);
bBishop1 = new Bishop(2, 0, 1, 0);
bBishop2 = new Bishop(5, 0, 1, 0);
bQueen = new Queen(3, 0, 1, 0);
bKing = new King(4, 0, 1, 0);

const bPieces = [bPawn1, bPawn2, bPawn3, bPawn4, bPawn5, bPawn6, bPawn7, bPawn8, bRook1, bRook2, bKnight1, bKnight2, bBishop1, bBishop2, bQueen, bKing];

var whiteView = 0;
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

    c.clearRect(0, 0, canvas.width, canvas.height);
    //Draw board:
    for(i=0; i<8; i++){
        for(j=0; j<8; j++){
            if((j+offset)%2==0){
                c.fillStyle = "#f0c987"; //Light
                }else{
                c.fillStyle = "#a35d06"; //Dark
            }
            var x = bCornerX + i*sSize;
            var y = bCornerY + j*sSize;
            c.fillRect(x, y, sSize, sSize)
        }
        offset+=1;
    }
    drawPieces(c, sSize, bCornerX, bCornerY);

}

function drawPieces(c, sSize, bCornerX, bCornerY){

        if (!sprite.complete){
            setTimeout(function(){
                drawPieces(c, sSize, bCornerX, bCornerY)
            }, 50);
            return;
        }

        for(var i=0; i<wPieces.length; i++){



            if(whiteView==1){
                pieces1 = wPieces;
                pieces2 = bPieces;
                x1 = bCornerX+pieces1[i].i*sSize;
                y1 = bCornerY+pieces1[i].j*sSize;
                x2 = bCornerX+pieces2[i].i*sSize;
                y2 = bCornerY+pieces2[i].j*sSize;
            }else{
                pieces1 = bPieces;
                pieces2 = wPieces;
                x1 = bCornerX+sSize*7-pieces1[i].i*sSize;
                y1 = bCornerY+sSize*7-pieces1[i].j*sSize;
                x2 = bCornerX+sSize*7-pieces2[i].i*sSize;
                y2 = bCornerY+sSize*7-pieces2[i].j*sSize;
            }


            c.drawImage(sprite, pieces1[i].sx, pieces1[i].sy, pieces1[i].sWidth, pieces1[i].sHeight, x1, y1, sSize, sSize);
            drawRotImage(c, Math.PI, sprite, pieces2[i].sx, pieces2[i].sy, pieces2[i].sWidth, pieces2[i].sHeight, x2, y2, sSize, sSize);
        }

}
function drawRotImage(c, rot, image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
    var halfWidth = dWidth/2;
    var halfHeight = dHeight/2;

    c.save();

    c.translate(dx+halfWidth, dy+halfHeight);
    c.rotate(rot);
    c.drawImage(sprite, sx, sy, sWidth, sHeight, -halfWidth, -halfHeight, dWidth, dHeight);
    c.restore();
}
