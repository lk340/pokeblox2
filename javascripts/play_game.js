export default class PlayGame {
  constructor(currentPiece, board) {
    this.currentPiece = currentPiece;
    this.board = board;
  }

  frameRate() {
    // use requestAnimationFrame
      // do NOT use setTimeout, as it will lag a frame behind
    // utilize this.verticalCollision's value to reset the frame and reset the piece's position
      // remember to first delete the piece, reset its value, and then draw the piece again
    // Work on this AFTER getting board clearing logic down - it's just easier to debug the board
      // clearing logic this way

    const test = setInterval(() => {
      if (this.currentPiece.verticalCollision === false) {
        this.currentPiece.moveDown();
        this.board.updateBoard(this.currentPiece);
        console.log(this.board.board);
      }

      else {
        // setTimeout(() => {
          clearInterval(test);
        // }, 500);
      }
    }, 500);
  }
}
P