export const movePiece = (currentPiece) => {
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
        document.getElementById("move-piece").play();
        return currentPiece.rotate();
      case 37: // left
        console.log("left");
        document.getElementById("move-piece").play();
        return currentPiece.moveLeft();
      case 40: // down
        console.log("down");
        document.getElementById("move-piece").play();
        return currentPiece.moveDown();
      case 39: // right
        console.log("right");
        document.getElementById("move-piece").play();
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
