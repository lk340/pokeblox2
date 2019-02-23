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
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./javascripts/modules.js");



class Board {
  constructor() {
    this.board = [];
    this.drawBoard = _modules__WEBPACK_IMPORTED_MODULE_1__["generateGridBlock"];
  }

  createEmptyBoard() {
    for (let y = 0; y < 20; y++) {
      this.board[y] = [];
      for (let x = 0; x < 10; x++) {
        this.board[y][x] = _colors__WEBPACK_IMPORTED_MODULE_0__["charcoal"];
      }
    }
  }

  drawBoard() {
    for ( let y = 0; y < this.board.length; y++ ) {
      for ( let x = 0; x < this.board[y].length; x++ ) {
        Object(_modules__WEBPACK_IMPORTED_MODULE_1__["generateGridBlock"])(x, y, this.board[y][x]);
      }
    }
  }
}

/***/ }),

/***/ "./javascripts/colors.js":
/*!*******************************!*\
  !*** ./javascripts/colors.js ***!
  \*******************************/
/*! exports provided: charcoal, shadow, ash, iColor, oColor, tColor, sColor, zColor, jColor, lColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charcoal", function() { return charcoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ash", function() { return ash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iColor", function() { return iColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oColor", function() { return oColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tColor", function() { return tColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sColor", function() { return sColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zColor", function() { return zColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jColor", function() { return jColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lColor", function() { return lColor; });
const charcoal = "rgb(54, 54, 54)";
const shadow = "rgb(41, 41, 41)";
const ash = "rgb(92, 92, 92)"; 
const iColor = "rgb(145, 145, 245)";
const oColor = "rgb(255, 255, 149)";
const tColor = "rgb(204, 129, 204)";
const sColor = "rgb(179, 221, 179)";
const zColor = "rgb(211, 123, 123)";
const jColor = "rgb(73, 73, 172)";
const lColor = "rgb(255, 205, 113)";

/***/ }),

/***/ "./javascripts/modules.js":
/*!********************************!*\
  !*** ./javascripts/modules.js ***!
  \********************************/
/*! exports provided: generateGridBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGridBlock", function() { return generateGridBlock; });
const generateGridBlock = (x, y, blockColor) => {
  if (x < 10 && y < 20) {
    const x_pos = x * 30;
    const y_pos = y * 30;
    context.fillStyle = blockColor;
    context.fillRect(x_pos, y_pos, 30, 30);
    context.strokeStyle = ash;
    context.strokeRect(x_pos, y_pos, 30, 30);
  }
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
/* harmony import */ var _javascripts_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/colors */ "./javascripts/colors.js");



document.addEventListener("DOMContentLoaded", () => {
  // CANVAS START
const canvasBoard = document.getElementById("board");
const context = canvasBoard.getContext("2d");
// CANVAS END

const gameBoard = new _javascripts_board__WEBPACK_IMPORTED_MODULE_0__["default"];
gameBoard.createEmptyBoard();
gameBoard.drawBoard();

console.log(gameBoard.board);
console.log(gameBoard.drawBoard());

});

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./pokeblox ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pokeblox */"./pokeblox.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map