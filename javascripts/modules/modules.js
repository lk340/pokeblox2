export const randomPiece = array => {
  // Returns random element in a given array.
  return array[Math.floor(Math.random()*array.length)];
};

export const arrayLastElement = array => {
  return array[array.length - 1];
};