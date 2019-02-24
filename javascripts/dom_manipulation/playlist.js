export const playlist = () => {
  let currentSong = document.getElementById("battle-team-rocket");
  
  document.getElementById("tearsOfLife").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tears-of-life");
    currentSong.play();
  });

  document.getElementById("johtoOpening").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("johto-opening");
    currentSong.play();
  });
  
  document.getElementById("viridianCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-city");
    currentSong.play();
  });
  
  document.getElementById("viridianForest").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-forest");
    currentSong.play();
  });
  
  document.getElementById("battleTeamRocket").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("battle-team-rocket");
    currentSong.play();
  });
  
  document.getElementById("route47").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("route-47");
    currentSong.play();
  });
  
  document.getElementById("gscChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("gsc-champion");
    currentSong.play();
  });
  
  document.getElementById("dppChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("dpp-champion");
    currentSong.play();
  });
  
  document.getElementById("nTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("n-theme");
    currentSong.play();
  });
  
  document.getElementById("snowbelleCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("snowbelle-city");
    currentSong.play();
  });
  
  document.getElementById("usumTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("usum-theme");
    currentSong.play();
  });
  
  document.getElementById("originalTetris").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("original-tetris");
    currentSong.play();
  });
  
  document.getElementById("tetris_99").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tetris99");
    currentSong.play();
  });
};
