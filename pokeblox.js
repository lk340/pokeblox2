import Board from './javascripts/board';
import Piece from './javascripts/piece';
import ShadowPiece from './javascripts/shadow_piece';
import PlayGame from './javascripts/play_game';

import { I, O, T, S, Z, J, L } from './javascripts/tetrominoes';
import { movePiece } from './javascripts/dom_manipulation/piece_controls';
import { playPause } from './javascripts/dom_manipulation/play_pause_controls';
import { playlistHighscore } from './javascripts/dom_manipulation/playlist_highscore';
import { playlist } from './javascripts/dom_manipulation/playlist';
import { guideModal } from './javascripts/dom_manipulation/guide_modal';
import { header } from './javascripts/dom_manipulation/header';

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
  const tetrominoes = [ O, T, S, Z, J, L];
  // const tetrominoes = [J];
  const currentPiece = new Piece(context, gameBoard, tetrominoes);
  const shadow = new ShadowPiece(context, gameBoard, currentPiece);
  // currentPiece.drawPiece();
  // DRAW PIECE END
  // =============================================================
  // GAME-PLAY LOGIC START
  let currentSong = document.getElementById("battle-team-rocket");
  const game = new PlayGame(currentPiece, shadow, gameBoard, currentSong);
  // game.frameRate();
  // GAME-PLAY LOGIC END
  // =============================================================
  // PIECE DOM MANIPULATION START
  movePiece(currentPiece, shadow, game);
  playPause(currentPiece, shadow, game);
  playlistHighscore();
  playlist(currentSong);
  guideModal();
  header();
  // PIECE DOM MANIPULATION END
});
