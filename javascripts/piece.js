import { charcoal, ash } from './colors';

export default class Piece {
  constructor(context, currentPiece, nextPiece) {
    this.context = context;
    this.shapes = currentPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.nextPiece = nextPiece;
    this.color = currentPiece.color;
    this.type = currentPiece.type;
    this.x_offset = 3;
    this.y_offset = 0;
    this.verticalCollision = false;
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

  deletePiece() {
    for (let y = 0; y < this.currentPiece.length; y++) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        if (this.currentPiece[y][x] === 1) {
          this.createGrid(this.x_offset + x, this.y_offset + y, charcoal, this.context);
        }
      }
    }
  }

  drawPiece() {
    for (let y = 0; y < this.currentPiece.length; y++) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {

        if (this.currentPiece[y][x] === 1) {
          this.createGrid(this.x_offset + x, this.y_offset + y, this.color, this.context);
        }

      }
    }
  }

  checkVerticalCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        
        if (this.currentPiece[y][x] === 1) {
          if (this.y_offset + y === 19) {
            this.verticalCollision = true;
          }
        }

      }
    }
  }

  moveLeft() {
    this.deletePiece();
    if (this.x_offset > 0) this.x_offset -= 1;
    this.drawPiece();
  }

  moveRight() {
    this.deletePiece();
    if (this.x_offset + this.currentPiece.length - 1 < 10) this.x_offset += 1;
    this.drawPiece();
  }
  
  moveDown() {
    this.checkVerticalCollision();
    this.deletePiece();
    if (this.verticalCollision === false) this.y_offset += 1;
    this.drawPiece();
  }

  rotate() {
    if (this.currentPieceIndex === this.shapes.length - 1) this.currentPieceIndex = 0;
    else this.currentPieceIndex += 1;

    this.deletePiece();
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.drawPiece();
  }

  instantFall() {

  }

  savePiece() {

  }

  frameRate() {
    // use requestAnimationFrame
    // do NOT use setTimeout, as it will lag a frame behind
  }
}