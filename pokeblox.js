import Board from './javascripts/board';
import Piece from './javascripts/piece';
import PlayGame from './javascripts/play_game';

import { I, O, T, S, Z, J, L } from './javascripts/tetrominoes';
import { movePiece } from './javascripts/dom_manipulation/piece_controls';
import { playPause } from './javascripts/dom_manipulation/play_pause_controls';

document.addEventListener("DOMContentLoaded", () => {
  // CANVAS START
  const canvasBoard = document.getElementById("board");
  const context = canvasBoard.getContext("2d");
  // CANVAS END
  // =============================================================
  // DRAW BOARD START
  const gameBoard = new Board(context);
  gameBoard.createEmptyBoard();
  gameBoard.drawBoard();
  // DRAW BOARD END
  // =============================================================
  // DRAW PIECE START
  const tetrominoes = [I, O, T, S, Z, J, L];
  const currentPiece = new Piece(context, gameBoard, tetrominoes);
  const shadow = new Piece(context, gameBoard, tetrominoes);
  currentPiece.drawPiece();
  // DRAW PIECE END
  // =============================================================
  // PIECE DOM MANIPULATION START
  movePiece(currentPiece);
  playPause();
  // PIECE DOM MANIPULATION END
  // =============================================================
  // GAME-PLAY LOGIC START
  const game = new PlayGame(currentPiece, gameBoard);
  game.frameRate();
  // GAME-PLAY LOGIC END

  console.log(gameBoard.board);
  console.log(currentPiece.currentPiece);
  console.log(currentPiece.shapes);
  console.log(currentPiece.nextPiece);
  console.log(currentPiece.currPiece);
});
