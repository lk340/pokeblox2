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
    
    console.log(this.currentPiece.verticalCollision);

    if (this.currentPiece.verticalCollision === false) {
      this.currentPiece.moveDown();
      this.board.updateBoard(this.currentPiece);
      this.shadowPiece.instantFall();

      console.log(this.board.board);
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
      this.currentPiece.drawPiece();

      this.shadowPiece.resetPiece(this.currentPiece);
      this.shadowPiece.drawPiece();
      this.shadowPiece.instantFall();
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
