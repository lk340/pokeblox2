export default class PlayGame {
  constructor(currentPiece, board) {
    this.currentPiece = currentPiece;
    this.board = board;
    this.toggleAnimation = true;
    this.animation = null;
    this.frameRate = this.frameRate.bind(this);
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
        // setTimeout(() => {
          cancelAnimationFrame(this.animation);
        // }, 400);
        document.getElementById("game-over").play();
        return;
      }
      this.currentPiece.moveDown();

      // console.log(this.board.board);
    }

    else {
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
    console.log(this.toggleAnimation);
    // cancelAnimationFrame(this.animation);
    // return;
  }
}
