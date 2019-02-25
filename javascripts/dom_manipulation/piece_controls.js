export const movePiece = (currentPiece, game) => {
  document.addEventListener("keydown", event => {
    if (game.start === true) {
      switch(event.which) {
        case 87: // w
          document.getElementById("move-piece").play();
          return currentPiece.rotate();
        case 65: // a
          document.getElementById("move-piece").play();
          return currentPiece.moveLeft();
        case 83: // s
          document.getElementById("move-piece").play();
          return currentPiece.moveDown();
        case 68: // d
          document.getElementById("move-piece").play();
          return currentPiece.moveRight();
        case 38: // up
          event.preventDefault();
          document.getElementById("move-piece").play();
          return currentPiece.rotate();
        case 37: // left
          event.preventDefault();
          document.getElementById("move-piece").play();
          return currentPiece.moveLeft();
        case 40: // down
          event.preventDefault();
          document.getElementById("move-piece").play();
          return currentPiece.moveDown();
        case 39: // right
          event.preventDefault();
          document.getElementById("move-piece").play();
          return currentPiece.moveRight();
        case 32: // space-bar
          event.preventDefault();
          if (game.start === true) currentPiece.instantFall();
          break;
        case 16: // shift
          return currentPiece.savePiece();
      }
    }
  });
};
