export const playPause = (currentPiece, shadowPiece, game) => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 81: // q
        const guideModal = document.getElementById("guide-modal").classList;
        if (guideModal[0] === "guide-modal") {
          guideModal.remove("guide-modal");
          guideModal.add("guide-modal-close");
        }
      
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

        const pauseScreen = document.getElementById("pause-screen").classList;
        if (pauseScreen[0] === "pause-screen-hide") {
          pauseScreen.remove("pause-screen-hide");
          pauseScreen.add("pause-screen");
        }

        else {
          pauseScreen.remove("pause-screen");
          pauseScreen.add("pause-screen-hide");
        }
        
        break;
    }
  });
};
