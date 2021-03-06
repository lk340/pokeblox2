export const movePiece = (currentPiece, shadowPiece, game) => {
  document.addEventListener("keydown", event => {
    function resetShadow() {
      shadowPiece.deletePiece();
      shadowPiece.x_offset = currentPiece.x_offset;
      shadowPiece.y_offset = currentPiece.y_offset;
      shadowPiece.verticalCollision = false;
      shadowPiece.horizontalLeftCollision = false;
      shadowPiece.horizontalRightCollision = false;
      shadowPiece.instantFall();
      shadowPiece.drawPiece();
    }

    function resetShadowShift() {
      shadowPiece.deletePiece();
      shadowPiece.x_offset = 3;
      shadowPiece.y_offset = currentPiece.y_offset;
      shadowPiece.shapes = currentPiece.shapes;
      shadowPiece.type = currentPiece.type;
      shadowPiece.currentPieceIndex = currentPiece.currentPieceIndex;
      shadowPiece.currentPiece = currentPiece.currentPiece;
      shadowPiece.verticalCollision = false;
      shadowPiece.horizontalLeftCollision = false;
      shadowPiece.horizontalRightCollision = false;
      shadowPiece.instantFall();
      shadowPiece.drawPiece();
    }

    function resetShadowRotate() {
      shadowPiece.deletePiece();
      shadowPiece.x_offset = currentPiece.x_offset;
      shadowPiece.y_offset = currentPiece.y_offset;
      shadowPiece.shapes = currentPiece.shapes;
      shadowPiece.type = currentPiece.type;
      shadowPiece.currentPieceIndex = currentPiece.currentPieceIndex;
      shadowPiece.currentPiece = currentPiece.currentPiece;
      shadowPiece.verticalCollision = false;
      shadowPiece.horizontalLeftCollision = false;
      shadowPiece.horizontalRightCollision = false;
      shadowPiece.instantFall();
      shadowPiece.drawPiece();
    }

    if (game.start === true) {
      switch(event.which) {
        case 87: // w
          document.getElementById("move-piece").play();
          currentPiece.rotate();
          resetShadowRotate();
          currentPiece.drawPiece();
          break;
        case 65: // a
          document.getElementById("move-piece").play();
          currentPiece.moveLeft();
          resetShadow();
          currentPiece.drawPiece();
          break;
        case 83: // s
          document.getElementById("move-piece").play();
          currentPiece.moveDown();
          break;
        case 68: // d
          document.getElementById("move-piece").play();
          currentPiece.moveRight();
          resetShadow();
          currentPiece.drawPiece();
          break;
        case 38: // up
          event.preventDefault();
          document.getElementById("move-piece").play();
          currentPiece.rotate();
          resetShadowRotate();
          currentPiece.drawPiece();
          break;
        case 37: // left
          event.preventDefault();

          document.getElementById("move-piece").play();
          currentPiece.moveLeft();
          resetShadow();
          currentPiece.drawPiece();
          break;
        case 40: // down
          event.preventDefault();

          document.getElementById("move-piece").play();
          currentPiece.moveDown();
          break;
        case 39: // right
          event.preventDefault();

          document.getElementById("move-piece").play();
          currentPiece.moveRight();
          resetShadow();
          currentPiece.drawPiece();
          break;
        case 32: // space-bar
          event.preventDefault();

          if (game.start === true) currentPiece.instantFall();
          break;
        case 16: // shift
          currentPiece.savePiece();

          resetShadowShift();
          break;
      }
    }
  });
};
