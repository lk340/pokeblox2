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
  // GAME-PLAY LOGIC START
  const game = new PlayGame(currentPiece, gameBoard);
  game.frameRate();
  // GAME-PLAY LOGIC END
  // =============================================================
  // PIECE DOM MANIPULATION START
  movePiece(currentPiece);
  playPause(game);
  // PIECE DOM MANIPULATION END
});
