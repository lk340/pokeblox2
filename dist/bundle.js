/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/board.js":
/*!******************************!*\
  !*** ./javascripts/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./javascripts/colors.js");


class Board {
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
        this.board[y][x] = _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"];
      }
    }
  }

  createGrid(x, y, blockColor, context) {
    if (x < 10 && y < 20) {
      const x_pos = x * 30;
      const y_pos = y * 30;
      context.fillStyle = blockColor;
      context.fillRect(x_pos, y_pos, 30, 30);
      context.strokeStyle = _colors__WEBPACK_IMPORTED_MODULE_0__["ash"];
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
      if (rowGrid === _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"]) this.colorCount++;
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
      if (!row.includes(_colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"])) {
        this.board.splice(lastRowIndex, 1);
        this.board.unshift([_colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"]]);
        this.drawBoard(); 
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
  }

  handlePoints() {
    switch(this.pointCounter) {
      case 1:
        this.points += this.pointCounter * 10;
        break;
      case 2:
        this.points += (this.pointCounter * 20) + 10;
        break;
      case 3:
        this.points += (this.pointCounter * 30) + 20;
        break;
      case 4:
        this.points += (this.pointCounter * 40) + 30;
        break;
    }
  }

  checkIfLose() {
    const firstRow = this.board[0];
    for (let x = 0; x < firstRow.length; x++) {
      if (firstRow[x] !== _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"]) this.gameOver = true;
    }
  }
}

/***/ }),

/***/ "./javascripts/colors.js":
/*!*******************************!*\
  !*** ./javascripts/colors.js ***!
  \*******************************/
/*! exports provided: charcoal, shadow, ash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charcoal", function() { return charcoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ash", function() { return ash; });
const charcoal = "rgb(54, 54, 54)";
const shadow = "rgb(41, 41, 41)";
const ash = "rgb(92, 92, 92)";

/***/ }),

/***/ "./javascripts/dom_manipulation/piece_controls.js":
/*!********************************************************!*\
  !*** ./javascripts/dom_manipulation/piece_controls.js ***!
  \********************************************************/
/*! exports provided: movePiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePiece", function() { return movePiece; });
const movePiece = (currentPiece, game) => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 87: // w
        console.log("w");
        document.getElementById("move-piece").play();
        return currentPiece.rotate();
      case 65: // a
        console.log("a");
        document.getElementById("move-piece").play();
        return currentPiece.moveLeft();
      case 83: // s
        console.log("s");
        document.getElementById("move-piece").play();
        return currentPiece.moveDown();
      case 68: // d
        console.log("d");
        document.getElementById("move-piece").play();
        return currentPiece.moveRight();
      case 38: // up
        console.log("up");
        event.preventDefault();
        document.getElementById("move-piece").play();
        return currentPiece.rotate();
      case 37: // left
        console.log("left");
        event.preventDefault();
        document.getElementById("move-piece").play();
        return currentPiece.moveLeft();
      case 40: // down
        console.log("down");
        event.preventDefault();
        document.getElementById("move-piece").play();
        return currentPiece.moveDown();
      case 39: // right
        console.log("right");
        event.preventDefault();
        document.getElementById("move-piece").play();
        return currentPiece.moveRight();
      case 32: // space-bar
        console.log("space-bar");
        event.preventDefault();
        if (game.start === true) currentPiece.instantFall();
        break;
      case 16: // shift
        console.log("shift");
        return currentPiece.savePiece();
    }
  });
};


/***/ }),

/***/ "./javascripts/dom_manipulation/play_pause_controls.js":
/*!*************************************************************!*\
  !*** ./javascripts/dom_manipulation/play_pause_controls.js ***!
  \*************************************************************/
/*! exports provided: playPause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playPause", function() { return playPause; });
const playPause = (currentPiece, game) => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 81: // q
        console.log("q");
        console.log(game.start);
        if (game.start === false) {
          game.start = true;
          currentPiece.drawPiece();
          game.frameRate();
        }
        break;
      case 80: // p
        console.log("p");
        break;
      case 69: // e
        console.log("e");
        game.pauseGame();
        break;
      case 82: // r
        console.log("r");
        break;
    }
  });
};

/***/ }),

/***/ "./javascripts/dom_manipulation/playlist.js":
/*!**************************************************!*\
  !*** ./javascripts/dom_manipulation/playlist.js ***!
  \**************************************************/
/*! exports provided: playlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlist", function() { return playlist; });
const playlist = () => {
  let currentSong = document.getElementById("battle-team-rocket");
  const playlistBackground = document.getElementById("playlist-background").classList;
  
  document.getElementById("tearsOfLife").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tears-of-life");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-tearsOfLife");
  });

  document.getElementById("johtoOpening").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("johto-opening");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-johtoOpening");
  });
  
  document.getElementById("viridianCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-city");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-viridianCity");
  });
  
  document.getElementById("viridianForest").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-forest");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-viridianForest");
  });
  
  document.getElementById("battleTeamRocket").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("battle-team-rocket");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-battleTeamRocket");
  });
  
  document.getElementById("route47").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("route-47");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-route47");
  });
  
  document.getElementById("gscChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("gsc-champion");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-gscChampion");
  });
  
  document.getElementById("dppChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("dpp-champion");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-dppChampion");
  });
  
  document.getElementById("nTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("n-theme");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-nTheme");
  });
  
  document.getElementById("snowbelleCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("snowbelle-city");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-snowbelleCity");
  });
  
  document.getElementById("usumTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("usum-theme");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-usumTheme");
  });
  
  document.getElementById("originalTetris").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("original-tetris");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-originalTetris");
  });
  
  document.getElementById("tetris_99").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tetris99");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-tetris99");
  });
};


/***/ }),

/***/ "./javascripts/dom_manipulation/playlist_highscore.js":
/*!************************************************************!*\
  !*** ./javascripts/dom_manipulation/playlist_highscore.js ***!
  \************************************************************/
/*! exports provided: playlistHighscore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlistHighscore", function() { return playlistHighscore; });
const playlistHighscore = () => {
  document.getElementById("playlist-enlarge").addEventListener("click", () => {
    const highScore = document.getElementById("high-score").classList;
    const playlist = document.getElementById("playlist").classList;
    const playlistSongs = document.getElementById("playlist-songs").classList;
    const playlistArrow = document.getElementById("playlist-enlarge").classList;

    const highScoreClass = highScore[0];
    const playlistClass = playlist[0];
    const playlistSongsClass = playlistSongs[0];
    const playlistArrowClass = playlistArrow[0];

    if (window.innerWidth > 1679) {
      if (highScoreClass === "high-score" && playlistClass === "playlist" && playlistSongsClass === "playlist-songs" && playlistArrowClass === "playlist-enlarge") {
        highScore.remove("high-score");
        highScore.add("high-score-enlarged");
    
        playlist.remove("playlist");
        playlist.add("playlist-enlarged");
    
        playlistSongs.remove("playlist-songs");
        playlistSongs.add("playlist-songs-enlarged");
    
        playlistArrow.remove("playlist-enlarge");
        playlistArrow.add("playlist-small");
      }
  
      else if (highScoreClass === "high-score-enlarged" && playlistClass === "playlist-enlarged" && playlistSongsClass === "playlist-songs-enlarged" && playlistArrowClass === "playlist-small") {
        highScore.remove("high-score-enlarged");
        highScore.add("high-score");
    
        playlist.remove("playlist-enlarged");
        playlist.add("playlist");
    
        playlistSongs.remove("playlist-songs-enlarged");
        playlistSongs.add("playlist-songs");
    
        playlistArrow.remove("playlist-small");
        playlistArrow.add("playlist-enlarge");
      }
    }
  });
};


/***/ }),

/***/ "./javascripts/modules/modules.js":
/*!****************************************!*\
  !*** ./javascripts/modules/modules.js ***!
  \****************************************/
/*! exports provided: randomPiece, arrayLastElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPiece", function() { return randomPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLastElement", function() { return arrayLastElement; });
const randomPiece = array => {
  // Returns random element in a given array.
  return array[Math.floor(Math.random()*array.length)];
};

const arrayLastElement = array => {
  return array[array.length - 1];
};

/***/ }),

/***/ "./javascripts/piece.js":
/*!******************************!*\
  !*** ./javascripts/piece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Piece; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./javascripts/colors.js");
/* harmony import */ var _modules_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modules */ "./javascripts/modules/modules.js");



class Piece {
  constructor(context, board, tetrominoes) {
    this.context = context;
    this.board = board;
    this.tetrominoes = tetrominoes;

    this.currPiece = Object(_modules_modules__WEBPACK_IMPORTED_MODULE_1__["randomPiece"])(this.tetrominoes);
    this.nextPiece = Object(_modules_modules__WEBPACK_IMPORTED_MODULE_1__["randomPiece"])(this.tetrominoes);

    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.savedPiece = null;

    this.color = this.currPiece.color;
    this.type = this.currPiece.type;

    this.x_offset = 3;
    this.y_offset = -1; // Note to self: was originally 0 but changed to -1 because of rAF rendering a frame faster

    this.verticalCollision = false;
    this.horizontalLeftCollision = false;
    this.horizontalRightCollision = false;
  }

  createGrid(x, y, blockColor, context) {
    if (x < 10 && y < 20) {
      const x_pos = x * 30;
      const y_pos = y * 30;
      context.fillStyle = blockColor;
      context.fillRect(x_pos, y_pos, 30, 30);
      context.strokeStyle = _colors__WEBPACK_IMPORTED_MODULE_0__["ash"];
      context.strokeRect(x_pos, y_pos, 30, 30);
    }
  }

  deletePiece() {
    for (let y = 0; y < this.currentPiece.length; y++) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        if (this.currentPiece[y][x] === 1) {
          this.createGrid(this.x_offset + x, this.y_offset + y, _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"], this.context);
        }
      }
    }
  }

  drawPiece() {
    for (let y = 0; y < this.currentPiece.length; y++) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        if (this.currentPiece[y][x] === 1) {
          this.createGrid(this.x_offset + x, this.y_offset + y, this.color, this.context);
        }
      }
    }
  }

  checkVerticalCollision() {
    // const y = this.currentPiece.length - 1;

    // If there is AT LEAST one grid block that detects a grid below it, then there must be a piece.
      // Therefore, if verticalCheck is AT LEAST 1, then we must have hit something.
    let verticalCheck = 0;

    if (this.y_offset >= 0) {
      for (let y = this.currentPiece.length - 1; y >= 0; y--) {
        for (let x = 0; x < this.currentPiece[y].length; x++) {
          if (this.currentPiece[y][x] === 1) {
            let gridBelow;
            if (this.y_offset + y + 1 < 20) gridBelow = this.board.board[this.y_offset + y + 1][this.x_offset + x];
  
            // if (gridBelow !== charcoal) verticalCheck += 1;
            if (this.y_offset + y === 19) this.verticalCollision = true;
            else if (gridBelow !== _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"]) this.verticalCollision = true;
            // else verticalCollision = false;
          }
        }
      }
    }

    // if (this.y_offset + y === 19) this.verticalCollision = true;
    // else if (verticalCheck > 0) this.verticalCollision = true;
    // else this.verticalCollision = false;
  }

  checkHorizontalLeftCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      if (this.currentPiece[y][0] === 1) {
        if (this.x_offset === 0) this.horizontalLeftCollision = true;
        else this.horizontalLeftCollision = false;
      }
    }

    const board = this.board.board;
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.currentPiece[y].length; x++) {
        const leftCollision = board[this.y_offset + y][this.x_offset + x - 1];
        if (leftCollision !== _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"]) this.horizontalLeftCollision = true;
      }
    }
  }

  checkHorizontalRightCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      const farRightIndex = this.currentPiece[y].length - 1;
      if (this.currentPiece[y][farRightIndex] === 1) {
        const farRightGridOnPiece = this.x_offset + this.currentPiece[y].length;
        const rightCollision = this.board.board[this.y_offset + y][farRightGridOnPiece];
        if (farRightGridOnPiece > 9 || rightCollision !== _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"]) this.horizontalRightCollision = true;
        else this.horizontalRightCollision = false;
      }
    }
  }

  moveLeft() {
    this.deletePiece();
    this.checkHorizontalLeftCollision();
    // if (this.x_offset > 0) this.x_offset -= 1;
    if (this.horizontalLeftCollision === false) {
      this.x_offset -= 1;
    }
    this.drawPiece();
  }

  moveRight() {
    this.checkHorizontalRightCollision();
    this.deletePiece();
    if (this.horizontalRightCollision === false) {
      this.x_offset += 1;
    }
    this.drawPiece();
  }
  
  moveDown() {
    this.checkVerticalCollision();
    this.deletePiece();
    if (this.verticalCollision === false) {
      this.y_offset += 1;
    }
    this.drawPiece();
  }

  rotate() {
    if (this.currentPieceIndex === this.shapes.length - 1) this.currentPieceIndex = 0;
    else this.currentPieceIndex += 1;
    this.deletePiece();
    this.currentPiece = this.shapes[this.currentPieceIndex];
    const y = this.currentPiece.length - 1;
    const x = this.currentPiece[y].length - 1;

    // Fixes piece falling off the board when rotating at the bottom
    if (this.y_offset + y > 19) {
      while (this.y_offset + y > 19) {
        this.y_offset -= 1;
      }
    }

    // Fixes piece falling off the board when rotating at the left
    if (this.x_offset < 0) {
      while (this.x_offset < 0) {
        this.x_offset += 1;
      }
    }

    // Fixes piece falling off the board when rotating at the right
    if (this.x_offset + x > 9) {
      while (this.x_offset + x > 9) {
        this.x_offset -= 1;
      }
    }

    this.drawPiece();
  }

  instantFall() {
    while (this.verticalCollision === false) {
      this.checkVerticalCollision();
      this.moveDown();
    }
    document.getElementById("fall-piece").play();
  }

  resetForSavePiece() {
    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.color = this.currPiece.color;
    this.type = this.currPiece.type;
    this.x_offset = 3;
    this.y_offset = 0;
    this.verticalCollision = false;
    this.horizontalLeftCollision = false;
    this.horizontalRightCollision = false;
  }

  savePiece() {
    if (this.verticalCollision === false) {
      if (this.savedPiece === null) {
        this.deletePiece();
        this.savedPiece = this.currPiece;
        this.currPiece = this.nextPiece;
        this.nextPiece = Object(_modules_modules__WEBPACK_IMPORTED_MODULE_1__["randomPiece"])(this.tetrominoes);
        this.resetForSavePiece();
        this.drawPiece();
      }
  
      else {
        this.deletePiece();
        const temp = this.savedPiece;
        this.savedPiece = this.currPiece;
        this.currPiece = temp;
        this.resetForSavePiece();
        this.drawPiece();
      }
    }
  }

  resetPiece() {
    // helper method for frameRate()
    this.currPiece = this.nextPiece;
    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.nextPiece = Object(_modules_modules__WEBPACK_IMPORTED_MODULE_1__["randomPiece"])(this.tetrominoes);
    this.color = this.currPiece.color;
    this.type = this.currPiece.type;
    this.x_offset = 3;
    this.y_offset = -1;
    this.verticalCollision = false;
    this.horizontalLeftCollision = false;
    this.horizontalRightCollision = false;
  }
  
  frameRate(board) {
    // use requestAnimationFrame
      // do NOT use setTimeout, as it will lag a frame behind
    // utilize this.verticalCollision's value to reset the frame and reset the piece's position
      // remember to first delete the piece, reset its value, and then draw the piece again
    // Work on this AFTER getting board clearing logic down - it's just easier to debug the board
      // clearing logic this way

    const test = setInterval(() => {
      if (this.verticalCollision === false) {
        this.moveDown();
        board.updateBoard(this);
        console.log(board.board);
      }
  
      else {
        clearInterval(test);
      }
    }, 500);
  }
}

/***/ }),

/***/ "./javascripts/play_game.js":
/*!**********************************!*\
  !*** ./javascripts/play_game.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayGame; });
class PlayGame {
  constructor(currentPiece, board) {
    this.currentPiece = currentPiece;
    this.board = board;
    this.toggleAnimation = true;
    this.animation = null;
    this.frameRate = this.frameRate.bind(this);
    this.start = false;
  }

  frameRate() {
    const requestAnimationFrame = 
      window.requestAnimationFrame || 
      window.mozRequestAnimationFrame || 
      window.webkitRequestAnimationFrame || 
      window.msRequestAnimationFrame;
    
    const cancelAnimationFrame = 
      window.cancelAnimationFrame || 
      window.mozCancelAnimationFrame;

    if (this.currentPiece.verticalCollision === false) {
      this.board.checkIfLose();
      if (this.board.gameOver === true) {
        setTimeout(() => {
          cancelAnimationFrame(this.animation);
        }, 400);
        document.getElementById("game-over").play();
        return;
      }
      this.currentPiece.moveDown();

      // console.log(this.board.board);
    }

    else { // this.currentPiece.verticalCollision === true
      this.board.updateBoard(this.currentPiece);
      this.board.deleteRow();
      this.currentPiece.resetPiece();
    }

    setTimeout(() => {
      if (this.toggleAnimation === true) this.animation = requestAnimationFrame(this.frameRate);
    }, 400);
  }

  pauseGame() {
    if (this.toggleAnimation === true) this.toggleAnimation = false;
    else {
      this.toggleAnimation = true;
      this.frameRate();
    }
  }
}


/***/ }),

/***/ "./javascripts/tetrominoes.js":
/*!************************************!*\
  !*** ./javascripts/tetrominoes.js ***!
  \************************************/
/*! exports provided: I, O, T, S, Z, J, L */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
const I = {
  shapes: [
    [ 
      [1, 1, 1, 1],
    ], 
    [
      [1], 
      [1], 
      [1], 
      [1],
    ]
  ],
  color: "rgb(168, 121, 255)",
  type: "I",
};

const O = {
  shapes: [
    [ 
      [1, 1], 
      [1, 1],
    ]
  ],
  color: "rgb(255, 255, 149)",
  type: "O",
};

const T = {
  shapes: [
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [0, 1],
    ]
  ],
  color: "rgb(255, 189, 252)",
  type: "T"
};

const S = {
  shapes: [
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ]
  ],
  color: "rgb(194, 255, 204)",
  type: "S",
};

const Z = {
  shapes: [
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ]
  ],
  color: "rgb(255, 137, 137)",
  type: "Z",
};

const J = {
  shapes: [
    [
      [1, 0, 0],
      [1, 1, 1],
    ],
    [
      [1, 1],
      [1, 0],
      [1, 0],
    ],
    [
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 1],
      [0, 1],
      [1, 1],
    ]
  ],
  color: "rgb(184, 255, 251)",
  type: "J",
};

const L = {
  shapes: [
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1],
      [0, 1],
      [0, 1],
    ]
  ],
  color: "rgb(255, 180, 137)",
  type: "L",
};


/***/ }),

/***/ "./pokeblox.js":
/*!*********************!*\
  !*** ./pokeblox.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascripts/board */ "./javascripts/board.js");
/* harmony import */ var _javascripts_piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/piece */ "./javascripts/piece.js");
/* harmony import */ var _javascripts_play_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascripts/play_game */ "./javascripts/play_game.js");
/* harmony import */ var _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascripts/tetrominoes */ "./javascripts/tetrominoes.js");
/* harmony import */ var _javascripts_dom_manipulation_piece_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascripts/dom_manipulation/piece_controls */ "./javascripts/dom_manipulation/piece_controls.js");
/* harmony import */ var _javascripts_dom_manipulation_play_pause_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascripts/dom_manipulation/play_pause_controls */ "./javascripts/dom_manipulation/play_pause_controls.js");
/* harmony import */ var _javascripts_dom_manipulation_playlist_highscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./javascripts/dom_manipulation/playlist_highscore */ "./javascripts/dom_manipulation/playlist_highscore.js");
/* harmony import */ var _javascripts_dom_manipulation_playlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./javascripts/dom_manipulation/playlist */ "./javascripts/dom_manipulation/playlist.js");










document.addEventListener("DOMContentLoaded", () => {
  // CANVAS START
  const canvasBoard = document.getElementById("board");
  const context = canvasBoard.getContext("2d");
  // CANVAS END
  // =============================================================
  // DRAW BOARD START
  const gameBoard = new _javascripts_board__WEBPACK_IMPORTED_MODULE_0__["default"](context);
  gameBoard.createEmptyBoard();
  gameBoard.drawBoard();
  // DRAW BOARD END
  // =============================================================
  // DRAW PIECE START
  const tetrominoes = [_javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__["I"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__["O"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__["T"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__["S"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__["Z"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__["J"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_3__["L"]];
  const currentPiece = new _javascripts_piece__WEBPACK_IMPORTED_MODULE_1__["default"](context, gameBoard, tetrominoes);
  const shadow = new _javascripts_piece__WEBPACK_IMPORTED_MODULE_1__["default"](context, gameBoard, tetrominoes);
  // currentPiece.drawPiece();
  // DRAW PIECE END
  // =============================================================
  // GAME-PLAY LOGIC START
  const game = new _javascripts_play_game__WEBPACK_IMPORTED_MODULE_2__["default"](currentPiece, gameBoard);
  // game.frameRate();
  // GAME-PLAY LOGIC END
  // =============================================================
  // PIECE DOM MANIPULATION START
  Object(_javascripts_dom_manipulation_piece_controls__WEBPACK_IMPORTED_MODULE_4__["movePiece"])(currentPiece, game);
  Object(_javascripts_dom_manipulation_play_pause_controls__WEBPACK_IMPORTED_MODULE_5__["playPause"])(currentPiece, game);
  Object(_javascripts_dom_manipulation_playlist_highscore__WEBPACK_IMPORTED_MODULE_6__["playlistHighscore"])();
  Object(_javascripts_dom_manipulation_playlist__WEBPACK_IMPORTED_MODULE_7__["playlist"])();
  // PIECE DOM MANIPULATION END
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./pokeblox.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pokeblox.js */"./pokeblox.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map