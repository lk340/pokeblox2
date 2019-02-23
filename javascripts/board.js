import { charcoal, ash } from './colors';

export default class Board {
  constructor(context) {
    this.board = [];
    this.context = context;
    this.colorCount = 0;
  }

  createEmptyBoard() {
    for (let y = 0; y < 20; y++) {
      this.board[y] = [];
      for (let x = 0; x < 10; x++) {
        this.board[y][x] = charcoal;
      }
    }
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

  drawBoard() {
    for ( let y = 0; y < this.board.length; y++ ) {
      for ( let x = 0; x < this.board[y].length; x++ ) {
        this.createGrid(x, y, this.board[y][x], this.context);
      }
    }
  }

  updateBoard(piece) {
    // will change board array to include colors
    // calls this.drawBoard() to re-draw the new board
    // looks through the array of the currentPiece (currentPiece.currentPiece)
      // updates board by for-looping through the currentPiece.currentPiece array
      // and adding currentPiece.color to board[currentPiece.y_offset + y][currentPiece.x_offset + x]
    // this needs to be called for every frame
    let currentPiece = piece.currentPiece;
    let pieceColor = piece.color;
    let x_offset = piece.x_offset;
    let y_offset = piece.y_offset;

    this.board = [];
    this.createEmptyBoard();
    for (let y = currentPiece.length - 1; y >= 0; y--) {
      for (let x = 0; x < currentPiece[y].length; x++) {
        if (currentPiece[y][x] === 1) {
          this.board[y_offset + y][x_offset + x] = pieceColor;
        }
      }
    }
  }

  checkIfRowIsEmpty(row) {
    // Helper method for deleteRow();
    for (let i = 0; i < row.length; i++) {
      const rowGrid = row[i]; // just an array element
      if (rowGrid === charcoal) this.colorCount++;
    }

    if (this.colorCount === row.length) {
      // If all the colors of the row are charcoal, then it must be an empty row.
      this.colorCount = 0; // reset colorCount for new row check
      return true;
    }

    // Otherwise, the row isn't empty.
    this.colorCount = 0; // reset colorCount for new row check
    return false;
  }

  deleteRow() {
    // will check the board from bottom-up and delete rows as it goes along
    let lastRowIndex = this.board.length - 1;
    const row = this.board[lastRowIndex];

    while (checkIfRowIsEmpty(row) === false) {
      if (!row.includes(charcoal)) {
        this.board.splice(this.board[y]);
        this.board.unshift([charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal]);  
      }
    }
  }

  checkIfLose() {
    // checks the top-most row, and if it isn't all charcoal, then the player loses
      // Optimization: if it hits a color that isn't charcoal, player loses
  }
}