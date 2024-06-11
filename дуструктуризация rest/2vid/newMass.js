const arr = [21, 21, 2, 1, 2, 1, 2, 2, 21, 23, 42, 53, 64, 7, 76];

function uniqueMas(el) {
  return Array.from(new Set(el));
}

console.log(uniqueMas(arr));
