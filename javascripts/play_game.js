export default class PlayGame {
  constructor(currentPiece, board) {
    this.currentPiece = currentPiece;
    this.board = board;
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
        cancelAnimationFrame(this.animation);
        return;
      }
      this.currentPiece.moveDown();
      console.log(this.board.board);
    }

    else {
      this.board.updateBoard(this.currentPiece);
      this.currentPiece.resetPiece();
    }

    setTimeout(() => {
      this.animation = requestAnimationFrame(this.frameRate);
    }, 700);
  }
}
