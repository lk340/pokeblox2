import { charcoal, ash } from './colors';

export default class Board {
  constructor(context) {
    this.board = [];
    this.context = context;
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

  updateBoard() {
    // will change board array to include colors
    // calls this.drawBoard() to re-draw the new board
  }

  deleteRow() {
    // will check the board from bottom-up and delete rows as it goes along
  }

  checkIfLose() {
    // checks the top-most row, and if it isn't all charcoal, then the player loses
      // Optimization: if it hits a color that isn't charcoal, player loses
  }
}