export const playlistHighscore = () => {
  document.getElementById("playlist-enlarge").addEventListener("click", () => {
    const highScore = document.getElementById("high-score").classList;
    const playlist = document.getElementById("playlist").classList;
    const playlistSongs = document.getElementById("playlist-songs").classList;
    const playlistArrow = document.getElementById("playlist-enlarge").classList;

    const highScoreClass = highScore[0];
    const playlistClass = playlist[0];
    const playlistSongsClass = playlistSongs[0];
    const playlistArrowClass = playlistArrow[0];

    if (highScoreClass === "high-score" && playlistClass === "playlist" && playlistSongsClass === "playlist-songs" && playlistArrowClass === "playlist-enlarge") {
      highScore.remove("high-score");
      highScore.add("high-score-enlarged");
  
      playlist.remove("playlist");
      playlist.add("playlist-enlarged");
  
      playlistSongs.remove("playlist-songs");
      playlistSongs.add("playlist-songs-enlarged");
  
      playlistArrow.remove("playlist-enlarge");
      playlistArrow.add("playlist-small");
    }

    else if (highScoreClass === "high-score-enlarged" && playlistClass === "playlist-enlarged" && playlistSongsClass === "playlist-songs-enlarged" && playlistArrowClass === "playlist-small") {
      highScore.remove("high-score-enlarged");
      highScore.add("high-score");
  
      playlist.remove("playlist-enlarged");
      playlist.add("playlist");
  
      playlistSongs.remove("playlist-songs-enlarged");
      playlistSongs.add("playlist-songs");
  
      playlistArrow.remove("playlist-small");
      playlistArrow.add("playlist-enlarge");
    }
  });
};
