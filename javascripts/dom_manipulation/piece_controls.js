export const movePiece = (currentPiece) => {
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
