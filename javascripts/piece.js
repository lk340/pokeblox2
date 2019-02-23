import { charcoal, ash } from './colors';
import { randomPiece } from './modules';

export default class Piece {
  constructor(context, tetrominoes) {
    this.context = context;
    this.tetrominoes = tetrominoes;
    this.currPiece = randomPiece(this.tetrominoes);
    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.nextPiece = randomPiece(this.tetrominoes).shapes;
    this.savedPiece = null;
    this.color = this.currPiece.color;
    this.type = this.currPiece.type;
    this.x_offset = 3;
    this.y_offset = 0;
    this.verticalCollision = false;
    this.horizontalLeftCollision = false;
    this.horizontalRightCollision = false;
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
    const y = this.currentPiece.length - 1;
    for (let x = 0; x < this.currentPiece[y].length; x++) {
      if (this.currentPiece[y][x] === 1) {
        if (this.y_offset + y === 19) this.verticalCollision = true;
        else this.verticalCollision = false;
      }
    }
  }

  checkHorizontalLeftCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      if (this.currentPiece[y][0] === 1) {
        if (this.x_offset < 0) this.horizontalLeftCollision = true;
        else this.horizontalLeftCollision = false;
      }
    }
  }

  checkHorizontalRightCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      const farRightIndex = this.currentPiece[y].length - 1;
      if (this.currentPiece[y][farRightIndex] === 1) {
        const farRightPosition = this.x_offset + this.currentPiece[y].length;
        if (farRightPosition > 9) this.horizontalRightCollision = true;
        else this.horizontalRightCollision = false;
      }
    }
  }

  moveLeft() {
    this.deletePiece();
    if (this.x_offset > 0) this.x_offset -= 1;
    this.drawPiece();
  }

  moveRight() {
    this.checkHorizontalRightCollision();
    this.deletePiece();
    if (this.horizontalRightCollision === false) this.x_offset += 1;
    this.drawPiece();
    console.log(this.x_offset);
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
    this.checkVerticalCollision();
    this.checkHorizontalLeftCollision();
    this.checkHorizontalRightCollision();

    if (this.verticalCollision === true) {
      while (this.verticalCollision === true) {
        this.checkVerticalCollision();
        this.deletePiece();
        this.y_offset -= 1;
        console.log(this.y_offset);
        this.drawPiece();
      }
    }

    if (this.horizontalLeftCollision === true) {
      while (this.horizontalLeftCollision === true) {
        this.checkHorizontalLeftCollision();
        this.x_offset += 1;
      }
    }

    else if (this.horizontalRightCollision === true) {
      while (this.horizontalRightCollision === true) {
        this.checkHorizontalRightCollision();
        this.x_offset -= 1;
      }
    }

    this.drawPiece();
  }

  instantFall() {
    while (this.verticalCollision === false) {
      this.checkVerticalCollision();
      this.moveDown();
    }
  }

  savePiece() {
    if (this.savedPiece === null) {
      this.savedPiece = this.currentPiece;
      this.currentPiece = nextPiece;
      this.nextPiece = randomPiece(this.tetrominoes).shapes;
    }

    else {
      const temp = this.savedPiece;
      this.savedPiece = this.currentPiece;
      this.currentPiece = temp;
    }
  }

  frameRate() {
    // use requestAnimationFrame
    // do NOT use setTimeout, as it will lag a frame behind
    // utilize this.verticalCollision's value to reset the frame and reset the piece's position
      // remember to first delete the piece, reset its value, and then draw the piece again
  }
}