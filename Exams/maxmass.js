let arr = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 3, 4, 5, 0, 1313];

let maxNamber = (a, b) => {
  return a > b ? a : b;
};
console.log(arr.reduce(maxNamber));
