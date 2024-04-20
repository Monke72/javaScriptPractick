const test = [56, 34, 11, 10, 74];

function search(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return "Такого числа не существует";
}
console.log(search(test, 754));
