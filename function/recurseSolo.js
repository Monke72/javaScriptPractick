function int(n) {
  if (n === 1) return 1;

  return n * int(n - 1);
}

console.log(int(5));
