import { charcoal, ash } from './colors';
import { randomPiece } from './modules/modules';

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
    this.y_offset = -1; // Note to self: was originally 0 but changed to -1 because of rAF rendering a frame faster

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
        // Checks wall collision
        if (this.x_offset === 0) this.horizontalLeftCollision = true;
        else this.horizontalLeftCollision = false;
      }
    }

    const board = this.board.board;
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        // Checks piece collision
        const leftPieceCollision = board[this.y_offset + y][this.x_offset + x - 1];
        if (leftPieceCollision !== charcoal) this.horizontalLeftCollision = true;
      }
    }
  }

  checkHorizontalRightCollision() {
    this.horizontalRightCollision = false;
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      const farRightIndex = this.currentPiece[y].length - 1;
      if (this.currentPiece[y][farRightIndex] === 1) {
        // Checks wall collision
        const rightWallCollision = this.x_offset + farRightIndex + 1;
        if (rightWallCollision > 9) this.horizontalRightCollision = true;
      }
    }

    const board = this.board.board;
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      const farRightIndex = this.currentPiece[y].length - 1;
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        // Checks Piece Collision
        const rightPieceCollision = board[this.y_offset + y][this.x_offset + farRightIndex + 1];
        if (rightPieceCollision !== charcoal) this.horizontalRightCollision = true;
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
  }

  moveRight() {
    this.checkHorizontalRightCollision();
    this.deletePiece();
    if (this.horizontalRightCollision === false) {
      this.x_offset += 1;
    }
  }
  
  moveDown() {
    this.checkVerticalCollision();
    this.deletePiece();
    if (this.verticalCollision === false) {
      this.y_offset += 1;
    }
    this.drawPiece();
  }

  rotateHelperLeftCollision() {
    // Left offset when rotating into another piece
    this.moveRight();

    const board = this.board.board;
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        if (board[this.y_offset + y][this.x_offset + x - 1] === charcoal) this.moveLeft();
      }
    }
  }

  rotateHelperRightCollision() {
    // Right offset when rotating into another piece
    this.moveLeft();

    // const board = this.board.board;
    // for (let y = this.currentPiece.length - 1; y >= 0; y--) {
    //   const farRightIndex = this.currentPiece[y].length - 1;
    //   for (let x = 0; x < this.currentPiece[y].length; x++) {
    //     const rightPieceCollision = board[this.y_offset + y][this.x_offset + farRightIndex + 1];
    //     if (rightPieceCollision === charcoal) this.moveRight();
    //   }
    // }
  }

  rotationLogic() {
    // Rotation logic
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
  }

  rotate() {
    if (this.currentPieceIndex === this.shapes.length - 1) this.currentPieceIndex = 0;
    else this.currentPieceIndex += 1;
    this.checkHorizontalLeftCollision();
    this.checkHorizontalRightCollision();
    if (this.horizontalLeftCollision === true) this.rotateHelperLeftCollision();
    else if (this.horizontalRightCollision === true) this.rotateHelperRightCollision();
    if (this.verticalCollision === false) this.rotationLogic();
  }

  instantFall() {
    while (this.verticalCollision === false) {
      this.checkVerticalCollision();
      this.moveDown();
    }
    document.getElementById("fall-piece").play();
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
    if (this.verticalCollision === false) {
      if (this.savedPiece === null) {
        this.deletePiece();
        this.savedPiece = this.currPiece;
        this.currPiece = this.nextPiece;

        const savedPiece = document.getElementById(`saved-${this.savedPiece.type}`).classList;
        if (savedPiece[0] === "hide-tetromino") {
          savedPiece.remove("hide-tetromino");
          savedPiece.add(`${this.savedPiece.type}`);
        }
        
        this.nextPiece = randomPiece(this.tetrominoes);
        this.resetForSavePiece();
        this.drawPiece();
      }
  
      else {
        this.deletePiece();
        const temp = this.savedPiece;
        
        const savedPiece = document.getElementById(`saved-${this.savedPiece.type}`).classList;
        if (savedPiece[0] !== "hide-tetromino") {
          savedPiece.remove(`${this.savedPiece.type}`);
          savedPiece.add("hide-tetromino");
        }
        
        this.savedPiece = this.currPiece;
        this.currPiece = temp;

        const savedPiece2 = document.getElementById(`saved-${this.savedPiece.type}`).classList;
        if (savedPiece2[0] === "hide-tetromino") {
          savedPiece2.remove("hide-tetromino");
          savedPiece2.add(`${this.savedPiece.type}`);
        }

        this.resetForSavePiece();
        this.drawPiece();
      }
    }
  }

  resetPiece() {

    // helper method for frameRate()
    let nPiece = document.getElementById(`next-${this.nextPiece.type}`).classList;
    // Gets rid of old next piece preview
    if (nPiece[0] !== "hide-tetromino") {
      nPiece.remove(`${this.nextPiece.type}`);
      nPiece.add("hide-tetromino");
    }
    
    this.currPiece = this.nextPiece;
    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.nextPiece = randomPiece(this.tetrominoes);
    this.color = this.currPiece.color;
    this.type = this.currPiece.type;
    this.x_offset = 3;
    this.y_offset = this.currPiece.type === 0;
    this.verticalCollision = false;
    this.horizontalLeftCollision = false;
    this.horizontalRightCollision = false;

    // Creates new next piece preview
    // nextPiece(this.nextPiece.type);
    nPiece = document.getElementById(`next-${this.nextPiece.type}`).classList;
    if (nPiece[0] === "hide-tetromino") {
      nPiece.remove("hide-tetromino");
      nPiece.add(`${this.nextPiece.type}`);
    }
  }
}