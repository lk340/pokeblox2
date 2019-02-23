export const generateGridBlock = (x, y, blockColor, context) => {
  if (x < 10 && y < 20) {
    const x_pos = x * 30;
    const y_pos = y * 30;
    context.fillStyle = blockColor;
    context.fillRect(x_pos, y_pos, 30, 30);
    context.strokeStyle = ash;
    context.strokeRect(x_pos, y_pos, 30, 30);
  }
};

export const drawBoard = (board) => {
  for ( let y = 0; y < board.length; y++ ) {
    for ( let x = 0; x < board[y].length; x++ ) {
      generateGridBlock(x, y, board[y][x]);
    }
  }
};