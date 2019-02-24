export const playlist = () => {
  let currentSong = document.getElementById("battle-team-rocket");
  
  document.getElementById("tearsOfLife").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tears-of-life");
    currentSong.play();
    currentSong.loop = true;
  });

  document.getElementById("johtoOpening").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("johto-opening");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("viridianCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-city");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("viridianForest").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("viridian-forest");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("battleTeamRocket").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("battle-team-rocket");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("route47").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("route-47");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("gscChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("gsc-champion");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("dppChampion").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("dpp-champion");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("nTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("n-theme");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("snowbelleCity").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("snowbelle-city");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("usumTheme").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("usum-theme");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("originalTetris").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("original-tetris");
    currentSong.play();
    currentSong.loop = true;
  });
  
  document.getElementById("tetris_99").addEventListener("click", () => {
    currentSong.pause();
    currentSong = document.getElementById("tetris99");
    currentSong.play();
    currentSong.loop = true;
  });
};
