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
const movePiece = (currentPiece) => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 87: // w
        console.log("w");
        return currentPiece.rotate();
      case 65: // a
        console.log("a");
        return currentPiece.moveLeft();
      case 83: // s
        console.log("s");
        return currentPiece.moveDown();
      case 68: // d
        console.log("d");
        return currentPiece.moveRight();
      case 38: // up
        console.log("up");
        return currentPiece.rotate();
      case 37: // left
        console.log("left");
        return currentPiece.moveLeft();
      case 40: // down
        console.log("down");
        return currentPiece.moveDown();
      case 39: // right
        console.log("right");
        return currentPiece.moveRight();
      case 32: // space-bar
        console.log("space-bar");
        return currentPiece.instantFall();
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
const playPause = () => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 81: // q
        console.log("q");
        break;
      case 80: // p
        console.log("p");
        break;
      case 69: // e
        console.log("e");
        break;
      case 82: // r
        console.log("r");
        break;
    }
  });
};

/***/ }),

/***/ "./javascripts/modules/randomPiece.js":
/*!********************************************!*\
  !*** ./javascripts/modules/randomPiece.js ***!
  \********************************************/
/*! exports provided: randomPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPiece", function() { return randomPiece; });
const randomPiece = array => {
  // Returns random element in a given array.
  return array[Math.floor(Math.random()*array.length)];
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
/* harmony import */ var _modules_randomPiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/randomPiece */ "./javascripts/modules/randomPiece.js");



class Piece {
  constructor(context, tetrominoes) {
    this.context = context;
    this.tetrominoes = tetrominoes;
    this.currPiece = Object(_modules_randomPiece__WEBPACK_IMPORTED_MODULE_1__["randomPiece"])(this.tetrominoes);
    this.shapes = this.currPiece.shapes;
    this.currentPieceIndex = 0;
    this.currentPiece = this.shapes[this.currentPieceIndex];
    this.nextPiece = Object(_modules_randomPiece__WEBPACK_IMPORTED_MODULE_1__["randomPiece"])(this.tetrominoes).shapes;
    this.savedPiece = null;
    this.color = this.currPiece.color;
    this.type = this.currPiece.type;
    this.x_offset = 3;
    this.y_offset = 0;
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
    const y = this.currentPiece.length - 1;
    for (let x = 0; x < this.currentPiece[y].length; x++) {
      if (this.currentPiece[y][x] === 1) {
        if (this.y_offset + y === 19) this.verticalCollision = true;
        else this.verticalCollision = false;
      }
    }

    console.log(this.verticalCollision);
  }

  checkHorizontalLeftCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      if (this.currentPiece[y][0] === 1) {
        if (this.x_offset === 0) this.horizontalLeftCollision = true;
        else this.horizontalLeftCollision = false;
      }
    }

    console.log(this.horizontalLeftCollision);
  }

  checkHorizontalRightCollision() {
    for (let y = this.currentPiece.length - 1; y >= 0; y--) {
      const farRightIndex = this.currentPiece[y].length - 1;
      if (this.currentPiece[y][farRightIndex] === 1) {
        const farRightGridOnPiece = this.x_offset + this.currentPiece[y].length;
        if (farRightGridOnPiece > 9) this.horizontalRightCollision = true;
        else this.horizontalRightCollision = false;
      }
    }

    console.log(this.horizontalRightCollision);
  }

  moveLeft() {
    this.deletePiece();
    this.checkHorizontalLeftCollision();
    // if (this.x_offset > 0) this.x_offset -= 1;
    if (this.horizontalLeftCollision === false) this.x_offset -= 1;
    this.drawPiece();
  }

  moveRight() {
    this.checkHorizontalRightCollision();
    this.deletePiece();
    if (this.horizontalRightCollision === false) this.x_offset += 1;
    this.drawPiece();
  }
  
  moveDown() {
    this.checkVerticalCollision();
    this.deletePiece();
    if (this.verticalCollision === false) this.y_offset += 1;
    this.drawPiece();
  }

  rotate() {
    if (this.currentPieceIndex === this.shapes.length - 1) this.currentPieceIndex = 0;
    else this.currentPieceIndex += 1;
    this.deletePiece();
    this.currentPiece = this.shapes[this.currentPieceIndex];
    
    this.checkHorizontalLeftCollision();
    this.checkHorizontalRightCollision();

    // Fixes piece falling off the board when rotating at the bottom
    const y = this.currentPiece.length - 1;
    const x = this.currentPiece[y].length - 1;
    
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
  }

  savePiece() {
    if (this.savedPiece === null) {
      this.savedPiece = this.currentPiece;
      this.currentPiece = nextPiece;
      this.nextPiece = Object(_modules_randomPiece__WEBPACK_IMPORTED_MODULE_1__["randomPiece"])(this.tetrominoes).shapes;

      console.log(this.currentPiece);
      console.log(this.savedPiece);
      console.log(this.nextPiece);
    }

    else {
      const temp = this.savedPiece;
      this.savedPiece = this.currentPiece;
      this.currentPiece = temp;

      console.log(this.currentPiece);
      console.log(this.savedPiece);
      console.log(this.nextPiece);
    }
  }

  frameRate() {
    // use requestAnimationFrame
      // do NOT use setTimeout, as it will lag a frame behind
    // utilize this.verticalCollision's value to reset the frame and reset the piece's position
      // remember to first delete the piece, reset its value, and then draw the piece again
    // Work on this AFTER getting board clearing logic down - it's just easier to debug the board
      // clearing logic this way
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
  color: "rgb(145, 145, 245)",
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
  color: "rgb(204, 129, 204)",
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
  color: "rgb(179, 221, 179)",
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
  color: "rgb(211, 123, 123)",
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
  color: "rgb(73, 73, 172)",
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
  color: "rgb(255, 205, 113)",
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
/* harmony import */ var _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascripts/tetrominoes */ "./javascripts/tetrominoes.js");
/* harmony import */ var _javascripts_dom_manipulation_piece_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascripts/dom_manipulation/piece_controls */ "./javascripts/dom_manipulation/piece_controls.js");
/* harmony import */ var _javascripts_dom_manipulation_play_pause_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascripts/dom_manipulation/play_pause_controls */ "./javascripts/dom_manipulation/play_pause_controls.js");







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
  const tetrominoes = [_javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__["I"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__["O"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__["T"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__["S"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__["Z"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__["J"], _javascripts_tetrominoes__WEBPACK_IMPORTED_MODULE_2__["L"]];
  const piece = new _javascripts_piece__WEBPACK_IMPORTED_MODULE_1__["default"](context, tetrominoes);
  const shadow = new _javascripts_piece__WEBPACK_IMPORTED_MODULE_1__["default"](context, tetrominoes);
  piece.drawPiece();
  // DRAW PIECE END
  // =============================================================
  // PIECE DOM MANIPULATION START
  Object(_javascripts_dom_manipulation_piece_controls__WEBPACK_IMPORTED_MODULE_3__["movePiece"])(piece);
  Object(_javascripts_dom_manipulation_play_pause_controls__WEBPACK_IMPORTED_MODULE_4__["playPause"])();
  // PIECE DOM MANIPULATION END

  console.log(gameBoard.board);
  console.log(piece.shapes);
  console.log(piece.nextPiece);
  console.log(piece.currPiece);
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