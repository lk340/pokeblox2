export const nextPiece = nextPieceType => {
  const nextPiece = document.getElementById(`next-${nextPieceType}`).classList;
  
  if (nextPiece[0] === "hide-tetromino") {
    nextPiece.remove("hide-tetromino");
    nextPiece.add(`${nextPieceType}`);
  }

  else {
    nextPiece.remove(`${nextPieceType}`);
    nextPiece.add("hide-tetromino");
  }
};
