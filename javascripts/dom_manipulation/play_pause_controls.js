export const playPause = () => {
  document.addEventListener("keydown", event => {
    switch(event.which) {
      case 81: // q
        console.log("q");
        break;
      case 80: // p
        console.log("p");
        break;
      case 69: // e
        console.log("e");
        break;
      case 82: // r
        console.log("r");
        break;
    }
  });
};