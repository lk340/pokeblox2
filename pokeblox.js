import Board from './javascripts/board';
import * as Colors from './javascripts/colors';

document.addEventListener("DOMContentLoaded", () => {
  // CANVAS START
const canvasBoard = document.getElementById("board");
const context = canvasBoard.getContext("2d");
// CANVAS END

const gameBoard = new Board;
gameBoard.createEmptyBoard();
gameBoard.drawBoard();

console.log(gameBoard.board);
console.log(gameBoard.drawBoard());

});