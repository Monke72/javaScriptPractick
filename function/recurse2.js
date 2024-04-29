function pow(x, y) {
  if (y === 0) return 1;

  return x * pow(x, y - 1);
}

const result = pow(5, 3);

console.log(result);
