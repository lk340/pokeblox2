import Board from './javascripts/board';
import Piece from './javascripts/piece';

import { I, O, T, S, Z, J, L } from './javascripts/tetrominoes';
import * as Modules from './javascripts/modules';

document.addEventListener("DOMContentLoaded", () => {
  // CANVAS START
  const canvasBoard = document.getElementById("board");
  const context = canvasBoard.getContext("2d");
  // CANVAS END

  // DRAW BOARD START
  const gameBoard = new Board(context);
  gameBoard.createEmptyBoard();
  gameBoard.drawBoard();
  // DRAW BOARD END

  // DRAW PIECE START
  const tetrominoes = [I, O, T, S, Z, J, L];
  const currentPiece = Modules.randomPiece(tetrominoes);
  const nextPiece = Modules.randomPiece(tetrominoes);
  const piece = new Piece(currentPiece, nextPiece, context);
  // DRAW PIECE END

  console.log(gameBoard.board);
  console.log(piece.currentPiece);
  console.log(piece.nextPiece);

});
