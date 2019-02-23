export const generateGridBlock = (x, y, blockColor) => {
  if (x < 10 && y < 20) {
    const x_pos = x * 30;
    const y_pos = y * 30;
    context.fillStyle = blockColor;
    context.fillRect(x_pos, y_pos, 30, 30);
    context.strokeStyle = ash;
    context.strokeRect(x_pos, y_pos, 30, 30);
  }
};
