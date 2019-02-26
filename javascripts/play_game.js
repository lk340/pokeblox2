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
      // this.shadowPiece.instantFall();
    }

    else { // this.currentPiece.verticalCollision === true
      this.board.checkIfLose();
      if (this.board.gameOver === true) {
        cancelAnimationFrame(this.animation);
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
