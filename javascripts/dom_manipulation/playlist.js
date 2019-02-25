export const playlist = () => {
  let currentSong = document.getElementById("battle-team-rocket");
  const playlistBackground = document.getElementById("playlist-background").classList;
  let pause = false;

  // Pause / Play hotkey
  document.addEventListener("keydown", event => {
    if (event.which === 82) {
      if (pause === false) {
        currentSong.pause();
        pause = true;
      }

      else {
        currentSong.play();
        pause = false;
      }
    }
  });
  
  // GUIDE MODAL START
  document.getElementById("guide-modal-battle-team-rocket").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("battle-team-rocket");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-battleTeamRocket");
  });

  document.getElementById("guide-modal-gsc-champion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("gsc-champion");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-gscChampion");
  });

  document.getElementById("guide-modal-usum-theme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("usum-theme");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-usumTheme");
  });

  document.getElementById("guide-modal-route-47").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("route-47");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-route47");
  });
  // GUIDE MODAL END
  
  document.getElementById("tearsOfLife").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tears-of-life");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-tearsOfLife");
  });

  document.getElementById("johtoOpening").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("johto-opening");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-johtoOpening");
  });
  
  document.getElementById("viridianCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-city");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-viridianCity");
  });
  
  document.getElementById("viridianForest").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-forest");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-viridianForest");
  });
  
  document.getElementById("battleTeamRocket").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("battle-team-rocket");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-battleTeamRocket");
  });
  
  document.getElementById("route47").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("route-47");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-route47");
  });
  
  document.getElementById("gscChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("gsc-champion");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-gscChampion");
  });
  
  document.getElementById("dppChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("dpp-champion");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-dppChampion");
  });
  
  document.getElementById("nTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("n-theme");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-nTheme");
  });
  
  document.getElementById("snowbelleCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("snowbelle-city");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-snowbelleCity");
  });
  
  document.getElementById("usumTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("usum-theme");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-usumTheme");
  });
  
  document.getElementById("originalTetris").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("original-tetris");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-originalTetris");
  });
  
  document.getElementById("tetris_99").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tetris99");
    currentSong.play();
    currentSong.loop = true;
    playlistBackground.remove(playlistBackground[0]);
    playlistBackground.add("bg-tetris99");
  });
};
