export default class Piece {
  constructor(currentPiece, nextPiece, context) {
    this.context = context;
    this.currentPieceIndex = 0;
    this.currentPiece = currentPiece[this.currentPieceIndex];
    this.nextPiece = nextPiece;
    this.x_offset = 3;
    this.y_offset = 3;
  }

  createGrid(x, y, blockColor, context) {
    if (x < 10 && y < 20) {
      const x_pos = x * 30;
      const y_pos = y * 30;
      context.fillStyle = blockColor;
      context.fillRect(x_pos, y_pos, 30, 30);
      context.strokeStyle = ash;
      context.strokeRect(x_pos, y_pos, 30, 30);
    }
  }

  drawPiece() {
    for (let y = 0; y < this.currentPiece.length; y++) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        if (this.currentPiece[y][x] === 1) {
          this.createGrid(x, y, )
        }
      }
    }
  }

  moveLeft() {

  }

  moveRight() {

  }
  
  moveDown() {

  }

  rotate() {
    if (this.currentPieceIndex === this.currentPiece.length - 2) {
      this.currentPieceIndex = 0;
    }

    this.currentPieceIndex += 1;
  }
}