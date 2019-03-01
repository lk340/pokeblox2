export const playPause = (currentPiece, shadowPiece, game) => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 81: // q
        const initialGameScreen = document.getElementById("initial-game-screen").classList;
        if (initialGameScreen[0] === "initial-game-screen") {
          initialGameScreen.remove("initial-game-screen");
          initialGameScreen.add("initial-game-screen-hide");
        }
      
        if (game.start === false) {
          game.start = true;
          currentPiece.drawPiece();
          shadowPiece.instantFall();
          shadowPiece.drawPiece();
          game.frameRate();
        }
        break;
      case 80: // p
        if (game.start === true) game.pauseGame();
        break;
      case 69: // e
        if (game.start === true) game.pauseGame();
        break;
    }
  });
};
