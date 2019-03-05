export default class PlayGame {
  constructor(currentPiece, shadowPiece, board, currentSong) {
    this.currentPiece = currentPiece;
    this.shadowPiece = shadowPiece;
    this.board = board;
    this.currentSong = currentSong;

    this.toggleAnimation = true;
    this.animation = null;
    this.frameRate = this.frameRate.bind(this);
    this.start = false;
  }

  frameRate() {
    // More accessible to different browsers and browser versions
    const requestAnimationFrame = 
      window.requestAnimationFrame || 
      window.mozRequestAnimationFrame || 
      window.webkitRequestAnimationFrame || 
      window.msRequestAnimationFrame;
    
    const cancelAnimationFrame = 
      window.cancelAnimationFrame || 
      window.mozCancelAnimationFrame;
    // More accessible to different browsers and browser versions

    if (this.currentPiece.verticalCollision === false) {
      this.currentPiece.moveDown();

      setTimeout(() => {
        if (this.toggleAnimation === true) this.animation = requestAnimationFrame(this.frameRate);
      }, 400);
    }

    else {
      this.board.checkIfLose();
      if (this.board.gameOver === true) {
        cancelAnimationFrame(this.animation);
        this.start = false; // prevents the use of controls in piece_controls.js
        document.getElementById("game-over").play();
        return;
      }
      this.updateBoard();
      this.resetPiece();
      this.resetShadowPiece();
      this.frameRate();
    }
  }

  updateBoard() {
    this.board.updateBoard(this.currentPiece);
    this.board.deleteRow();
  }

  resetPiece() {
    this.currentPiece.resetPiece();
  }

  resetShadowPiece() {
    this.shadowPiece.resetPiece(this.currentPiece);
    this.shadowPiece.drawPiece();
    this.shadowPiece.instantFall();
    this.currentPiece.drawPiece();
  }

  resetFrame() {
    this.board.checkIfLose();
    if (this.board.gameOver === true) {
      cancelAnimationFrame(this.animation);
      this.start = false;
      document.getElementById("game-over").play();
      return;
    }

    this.board.updateBoard(this.currentPiece);
    this.board.deleteRow();
    
    this.currentPiece.resetPiece();

    this.shadowPiece.resetPiece(this.currentPiece);
    this.shadowPiece.drawPiece();
    this.shadowPiece.instantFall();
    this.currentPiece.drawPiece();
  }

  pauseGame() {
    if (this.toggleAnimation === true) {
      // this.start = false;
      this.toggleAnimation = false;
    }
    else {
      // this.start = true;
      this.toggleAnimation = true;
      this.frameRate();
    }
  }
}
