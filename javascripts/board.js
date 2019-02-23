import { charcoal } from './colors';
import { generateGridBlock } from './modules';

export default class Board {
  constructor() {
    this.board = [];
    this.drawBoard = generateGridBlock;
  }

  createEmptyBoard() {
    for (let y = 0; y < 20; y++) {
      this.board[y] = [];
      for (let x = 0; x < 10; x++) {
        this.board[y][x] = charcoal;
      }
    }
  }

  drawBoard() {
    for ( let y = 0; y < this.board.length; y++ ) {
      for ( let x = 0; x < this.board[y].length; x++ ) {
        generateGridBlock(x, y, this.board[y][x]);
      }
    }
  }
}