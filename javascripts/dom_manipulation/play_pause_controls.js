export const playPause = (currentPiece, game) => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 81: // q
        console.log("q");
        console.log(game.start);
        if (game.start === false) {
          game.start = true;
          currentPiece.drawPiece();
          game.frameRate();
        }
        break;
      case 80: // p
        console.log("p");
        break;
      case 69: // e
        console.log("e");
        game.pauseGame();
        break;
      case 82: // r
        console.log("r");
        break;
    }
  });
};