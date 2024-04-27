function uniqValues(array) {
  return [...new Set(array)];
}
console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6]));
