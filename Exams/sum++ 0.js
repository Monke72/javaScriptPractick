let arr = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 3, 4, 5, 0],
  positiveN = [],
  negativeN = [];
zero = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 1) {
    positiveN.push(arr[i]);
  } else if (arr[i] === 0) {
    zero.push(arr[i]);
  } else if (arr[i] <= 0) {
    negativeN.push(arr[i]);
  }
}
function count() {
  let sum = 0;
  positiveN.forEach((item) => {
    sum += item;
  });
  return sum;
}

let result =
  `Сумма положительных чисел равна ${count()} ` +
  " (количество отрицательных чисел: " +
  negativeN.length +
  ")" +
  `Количество нулевых чисел = ${zero.length} `;
console.log(result);
