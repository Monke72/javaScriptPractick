function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); //sqrt означает корень pow - степень
}
console.log(distanceBetweenPoints(2, 1, 11, 12));
