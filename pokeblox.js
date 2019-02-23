import Board from './javascripts/board';
import Piece from './javascripts/piece';

import { I, O, T, S, Z, J, L } from './javascripts/tetrominoes';
import { randomPiece } from './javascripts/modules';
import { movePiece } from './javascripts/dom_manipulation/piece_controls';

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
  const currentPiece = randomPiece(tetrominoes);
  const nextPiece = randomPiece(tetrominoes);
  const piece = new Piece(context, currentPiece, nextPiece);
  piece.drawPiece();
  // DRAW PIECE END
  
  // PIECE DOM MANIPULATION START
  movePiece(piece);
  // PIECE DOM MANIPULATION END

  console.log(gameBoard.board);
  console.log(piece.color);
  console.log(piece.nextPiece);

});
