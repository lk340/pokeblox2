import { charcoal, ash } from './colors';
import { randomPiece, arrayLastElement } from './modules/modules';

export default class Piece {
  constructor(context, board, tetrominoes) {
    this.context = context;
    this.board = board;
    this.tetrominoes = tetrominoes;

    this.currPiece = randomPiece(this.tetrominoes);
    this.nextPiece = randomPiece(this.tetrominoes);

    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.savedPiece = null;

    this.color = this.currPiece.color;
    this.type = this.currPiece.type;

    this.x_offset = 3;
    this.y_offset = -1; // Note: was originally 0 but changed to -1 because of rAF going a frame faster

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
    // const y = this.currentPiece.length - 1;

    // If there is AT LEAST one grid block that detects a grid below it, then there must be a piece.
      // Therefore, if verticalCheck is AT LEAST 1, then we must have hit something.
    let verticalCheck = 0;

    if (this.y_offset >= 0) {
      for (let y = this.currentPiece.length - 1; y >= 0; y--) {
        for (let x = 0; x < this.currentPiece[y].length; x++) {
          if (this.currentPiece[y][x] === 1) {
            let gridBelow;
            if (this.y_offset + y + 1 < 20) gridBelow = this.board.board[this.y_offset + y + 1][this.x_offset + x];
  
            // if (gridBelow !== charcoal) verticalCheck += 1;
            if (this.y_offset + y === 19) this.verticalCollision = true;
            else if (gridBelow !== charcoal) this.verticalCollision = true;
            // else verticalCollision = false;
          }
        }
      }
    }

    // if (this.y_offset + y === 19) this.verticalCollision = true;
    // else if (verticalCheck > 0) this.verticalCollision = true;
    // else this.verticalCollision = false;
  }

  checkHorizontalLeftCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      if (this.currentPiece[y][0] === 1) {
        if (this.x_offset === 0) this.horizontalLeftCollision = true;
        else this.horizontalLeftCollision = false;
      }
    }
  }

  checkHorizontalRightCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      const farRightIndex = this.currentPiece[y].length - 1;
      if (this.currentPiece[y][farRightIndex] === 1) {
        const farRightGridOnPiece = this.x_offset + this.currentPiece[y].length;
        if (farRightGridOnPiece > 9) this.horizontalRightCollision = true;
        else this.horizontalRightCollision = false;
      }
    }
  }

  moveLeft() {
    this.deletePiece();
    this.checkHorizontalLeftCollision();
    // if (this.x_offset > 0) this.x_offset -= 1;
    if (this.horizontalLeftCollision === false) this.x_offset -= 1;
    this.drawPiece();
  }

  moveRight() {
    this.checkHorizontalRightCollision();
    this.deletePiece();
    if (this.horizontalRightCollision === false) this.x_offset += 1;
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
    const y = this.currentPiece.length - 1;
    const x = this.currentPiece[y].length - 1;

    // Fixes piece falling off the board when rotating at the bottom
    if (this.y_offset + y > 19) {
      while (this.y_offset + y > 19) {
        this.y_offset -= 1;
      }
    }

    // Fixes piece falling off the board when rotating at the left
    if (this.x_offset < 0) {
      while (this.x_offset < 0) {
        this.x_offset += 1;
      }
    }

    // Fixes piece falling off the board when rotating at the right
    if (this.x_offset + x > 9) {
      while (this.x_offset + x > 9) {
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

  resetForSavePiece() {
      this.shapes = this.currPiece.shapes;
      this.currentPieceIndex = 0;
      this.currentPiece = this.shapes[this.currentPieceIndex];
      this.color = this.currPiece.color;
      this.type = this.currPiece.type;
      this.x_offset = 3;
      this.y_offset = 0;
      this.verticalCollision = false;
      this.horizontalLeftCollision = false;
      this.horizontalRightCollision = false;
  }

  savePiece() {
    if (this.savedPiece === null) {
      this.deletePiece();
      this.savedPiece = this.currPiece;
      this.currPiece = this.nextPiece;
      this.nextPiece = randomPiece(this.tetrominoes);
      this.resetForSavePiece();
      this.drawPiece();
    }

    else {
      this.deletePiece();
      const temp = this.savedPiece;
      this.savedPiece = this.currPiece;
      this.currPiece = temp;
      this.resetForSavePiece();
      this.drawPiece();
    }
  }

  resetPiece() {
    // helper method for frameRate()
    this.currPiece = this.nextPiece;
    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.nextPiece = randomPiece(this.tetrominoes);
    this.color = this.currPiece.color;
    this.type = this.currPiece.type;
    this.x_offset = 3;
    this.y_offset = -1;
    this.verticalCollision = false;
    this.horizontalLeftCollision = false;
    this.horizontalRightCollision = false;
  }
  
  frameRate(board) {
    // use requestAnimationFrame
      // do NOT use setTimeout, as it will lag a frame behind
    // utilize this.verticalCollision's value to reset the frame and reset the piece's position
      // remember to first delete the piece, reset its value, and then draw the piece again
    // Work on this AFTER getting board clearing logic down - it's just easier to debug the board
      // clearing logic this way

    const test = setInterval(() => {
      if (this.verticalCollision === false) {
        this.moveDown();
        board.updateBoard(this);
        console.log(board.board);
      }
  
      else {
        clearInterval(test);
      }
    }, 500);
  }
}