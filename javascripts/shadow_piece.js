import { charcoal, ash, shadow } from './colors';

export default class ShadowPiece {
  constructor(context, board, currentPiece) {
    this.context = context;
    this.board = board;
    this.currPiece = currentPiece;

    this.shapes = currentPiece.shapes;
    this.color = shadow;
    this.type = currentPiece.type;
    this.currentPieceIndex = currentPiece.currentPieceIndex;
    this.currentPiece = currentPiece.currentPiece;

    this.x_offset = 3;
    this.y_offset = currentPiece.y_offset;

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
    if (this.y_offset >= 0) {
      for (let y = this.currentPiece.length - 1; y >= 0; y--) {
        for (let x = 0; x < this.currentPiece[y].length; x++) {
          if (this.currentPiece[y][x] === 1) {
            let gridBelow;
            if (this.y_offset + y + 1 < 20) gridBelow = this.board.board[this.y_offset + y + 1][this.x_offset + x];
  
            if (this.y_offset + y === 19) this.verticalCollision = true;
            else if (gridBelow !== charcoal) this.verticalCollision = true;
          }
        }
      }
    }
  }

  checkHorizontalLeftCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      if (this.currentPiece[y][0] === 1) {
        if (this.x_offset === 0) this.horizontalLeftCollision = true;
        else this.horizontalLeftCollision = false;
      }
    }

    const board = this.board.board;
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        const leftCollision = board[this.y_offset + y][this.x_offset + x - 1];
        if (leftCollision !== charcoal) this.horizontalLeftCollision = true;
      }
    }
  }

  checkHorizontalRightCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      const farRightIndex = this.currentPiece[y].length - 1;
      if (this.currentPiece[y][farRightIndex] === 1) {
        const farRightGridOnPiece = this.x_offset + this.currentPiece[y].length;
        const rightCollision = this.board.board[this.y_offset + y][farRightGridOnPiece];
        if (farRightGridOnPiece > 9 || rightCollision !== charcoal) this.horizontalRightCollision = true;
        else this.horizontalRightCollision = false;
      }
    }
  }

  moveLeft() {
    this.deletePiece();
    this.checkHorizontalLeftCollision();
    // if (this.x_offset > 0) this.x_offset -= 1;
    if (this.horizontalLeftCollision === false) {
      this.x_offset -= 1;
    }
    this.drawPiece();
  }

  moveRight() {
    this.checkHorizontalRightCollision();
    this.deletePiece();
    if (this.horizontalRightCollision === false) {
      this.x_offset += 1;
    }
    this.drawPiece();
  }
  
  moveDown() {
    this.checkVerticalCollision();
    this.deletePiece();
    if (this.verticalCollision === false) {
      this.y_offset += 1;
    }
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

  resetPiece(piece) {
    this.currPiece = piece;

    this.shapes = piece.shapes;
    this.color = shadow;
    this.type = piece.type;
    this.currentPieceIndex = piece.currentPieceIndex;
    this.currentPiece = piece.currentPiece;

    this.x_offset = 3;
    this.y_offset = piece.y_offset + 1;

    this.verticalCollision = false;
    this.horizontalLeftCollision = false;
    this.horizontalRightCollision = false;
  }
}
