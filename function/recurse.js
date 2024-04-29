let count = 0;

function recurse() {
  if (count === 5) return "done";
  count++;
  return recurse();
}

console.log(recurse());
console.log(count);
