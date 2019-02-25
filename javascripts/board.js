import { charcoal, ash } from './colors';

export default class Board {
  constructor(context) {
    this.board = [];
    this.context = context;
    this.colorCount = 0;
    this.gameOver = false;
    this.pointCounter = 0;
    this.points = 0;
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
    let currentPiece = piece.currentPiece;
    let pieceColor = piece.color;
    let x_offset = piece.x_offset;
    let y_offset = piece.y_offset;

    if (piece.verticalCollision === true) {
      for (let y = currentPiece.length - 1; y >= 0; y--) {
        for (let x = 0; x < currentPiece[y].length; x++) {
          if (currentPiece[y][x] === 1) {
            this.board[y_offset + y][x_offset + x] = pieceColor;
          }
        }
      }
      this.drawBoard();
    }
  }

  checkIfRowIsEmpty(row) {
    // Helper method for deleteRow();
    for (let i = 0; i < row.length; i++) {
      const rowGrid = row[i];
      if (rowGrid === charcoal) this.colorCount++;
    }

    if (this.colorCount === row.length) {
      // If all the colors of the row are charcoal, then it must be an empty row.
      this.colorCount = 0; // reset colorCount for new row check
      return true;
    }

    else {
      // Otherwise, the row isn't empty.
      this.colorCount = 0; // reset colorCount for new row check
      return false;
    }
  }

  deleteRow() {
    // will check the board from bottom-up and delete rows as it goes along
    let lastRowIndex = this.board.length - 1;
    let row = this.board[lastRowIndex];
    let rowCheck = this.checkIfRowIsEmpty(row);

    while (rowCheck === false) {
      if (!row.includes(charcoal)) {
        this.board.splice(lastRowIndex, 1);
        this.board.unshift([charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal, charcoal]);
        this.drawBoard(); 
        this.pointCounter += 1;
        document.getElementById("clear-row").play();
      }

      else {
        if (lastRowIndex > 0) {            
          if (lastRowIndex - 1 === 0) break;
          else {
            lastRowIndex -= 1;
          }
        }
      }

      row = this.board[lastRowIndex];
      rowCheck = this.checkIfRowIsEmpty(row);
    }

    this.handlePoints();
  }

  handlePoints() {
    switch(this.pointCounter) {
      case 1:
        this.points += this.pointCounter * 10;
        document.getElementById("points").innerHTML = this.points;
        this.pointCounter = 0;
        break;
      case 2:
        this.points += (this.pointCounter * 20) + 10;
        document.getElementById("points").innerHTML = this.points;
        this.pointCounter = 0;
        break;
      case 3:
        this.points += (this.pointCounter * 30) + 20;
        document.getElementById("points").innerHTML = this.points;
        this.pointCounter = 0;
        break;
      case 4:
        this.points += (this.pointCounter * 40) + 30;
        document.getElementById("points").innerHTML = this.points;
        this.pointCounter = 0;
        break;
    }
  }

  checkIfLose() {
    const firstRow = this.board[0];
    for (let x = 0; x < firstRow.length; x++) {
      if (firstRow[x] !== charcoal) this.gameOver = true;
    }
  }
}