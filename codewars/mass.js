function solution(number) {
  var sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(52));

mas = [1, 2, 3];

for (m of mas) {
  console.log(m * 2);
}
console.log(mas);
