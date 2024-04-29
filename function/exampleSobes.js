let arr = [1, [2, 3], 4, [5, [6, 9]]];

function getSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    console.log(Array.isArray(elem));
    if (Array.isArray(elem)) {
      sum += getSum(elem);
    } else {
      sum += elem;
    }
  }
  return sum;
}

console.log(getSum(arr));
// Функция getSum(arr) рекурсивно проходит по всем элементам массива и суммирует их. Если элемент - массив, функция вызывает себя рекурсивно для этого вложенного массива. В итоге функция возвращает сумму всех элементов в массиве.
