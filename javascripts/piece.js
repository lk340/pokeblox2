import { ash } from './colors';

export default class Piece {
  constructor(currentPiece, nextPiece, context) {
    this.context = context;
    this.currentPieceIndex = 0;
    this.nextPiece = nextPiece;
    this.shapes = currentPiece.shapes[this.currentPieceIndex];
    this.color = currentPiece.color;
    this.type = currentPiece.type;
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
    for (let y = 0; y < this.shapes.length; y++) {
      for (let x = 0; x < this.shapes[y].length; x++) {
        if (this.shapes[y][x] === 1) {
          this.createGrid(this.x_offset + x, this.y_offset + y, this.color, this.context);
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
    if (this.currentPieceIndex === this.shapes.length - 1) {
      this.currentPieceIndex = 0;
    }

    this.currentPieceIndex += 1;
  }
}