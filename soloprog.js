//1
// function sumSearch(k, b) {
//   numbers = [];
//   for (let i = 1; i <= 100; i++) {
//     numbers.push(i * k + b);
//   }
//   return numbers;
// }
// console.log(sumSearch(2, 3));
//3
// let arr = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 3, 4, 5, 0];
// positiven = [];
// negativen = [];
// zero = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positiven.push(arr[i]);
//   } else if (arr[i] < 0) {
//     negativen.push(arr[i]);
//   } else if (arr[i] === 0) {
//     zero.push(arr[i]);
//   }
// }
// let sum = 0;
// positiven.forEach((item) => {
//   sum += item;
// });
// console.log(sum);
// console.log(negativen.length);
// console.log(zero.length);
//4
// let array = [
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 5],
//   [9, 100, 11, 12, 5],
//   [13, 124244, 15, 16, 1313],
// ];

// let max = array[0][0];

// for (let i = 0; i < array.length; i++) {
//   for (j = 0; j < array[i].length; j++) {
//     if (max < array[i][j]) {
//       max = array[i][j];
//     }
//   }
// }
// console.log("Максимальное значение в массиве: " + max);

// let arr = [-1, 0, -2, 0, -55, -4, -5, 1, 2, 3, 4, 5, 0];
// let nech = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     nech.push(arr[i]);
//   }max = array[i][j];
// }
// let sA = 0;
// nech.forEach((el) => {
//   sA += el / nech.length;
// });
// console.log(sA)
//максимум
// let arr = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 3, 4, 512, 0];

// function getMax(a) {
//   let max = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//       max = a[i];
//     }
//   }
//   return max;
// }
// console.log(getMax(arr));

// let arr = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 3, 4, 5313, 11];

// function findAll() {
//   let sum = 0;
//   arr.forEach((el) => {
//     sum += el;
//   });
//   return sum;
// }
// console.log(findAll());

//2touch

// function distant(x1, x2, y1, y2) {
//   let sum = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//   return sum;
// }

// console.log(distant(2, 131, 313, 11));

//big word
// const sentence = "Это пример строки, в которой нужно найти самое длинное слово";
// const longestWordLength = findLongestWordLength(sentence);

// function findLongestWordLength(str) {
//   let max = 0;
//   let words = str.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > max) {
//       max = words[i].length;
//     }
//   }
//   return max;
// }
// console.log("Длина самого длинного слова: " + longestWordLength);

// const sentence =
//   "Это примерdffgf строки, в которой нужно найти самое длинное слово";
// newText = sentence.split(" ");

// let max = 0;

// newText.forEach((el) => {
//   if (max < el.length) {
//     max = el.length;
//   }
// });
// console.log(max);

//Создаем пустой массив 5x4

// let arr = [];

// function sumAll() {
//   let max = 0;
//   for (let i = 0; i < 5; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 4; j++) {
//       arr[i][j] = parseInt(prompt(`Введите число [${i}] [${j}]`));
//       if (arr[i][j] > max) {
//         max = arr[i][j];
//       }
//     }
//   }
//   console.log(max);
// }
// sumAll();
// function maxAll() {
//   let max = 0;
//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 4; j++) {
//       if (arr[i][j] > max) {
//         max = arr[i][j];
//       }
//     }
//   }
//   return max;
// }
// console.log(maxAll());

// let arr = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 33131, 4, 5313, 11];
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let arr = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 33131, 4, 5313, 11];
// newMas = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     newMas.push(arr[i]);
//   }
// }
// sum = 0;
// newMas.forEach((el) => {
//   sum += el / newMas.length;
// });
// console.log(sum);

// arr = [];
// let max = 1;
// function fiveSum() {
//   for (let i = 0; i < 5; i++) {
//     arr[i] = parseInt(prompt(`Введите значение [${i}]`));
//     max *= arr[i];
//   }
//   return max;
// }
// console.log(fiveSum());

// arr = [];
// max = 0;
// for (let i = 0; i < 10; i++) {
//   arr[i] = parseInt(prompt(`Введите значение [${i}]`));
//   if (Math.abs(arr[i]) > Math.abs(max)) {
//     max = Math.abs(arr[i]);
//   }
// }
// console.log(max);

// let arr = [-1, 0, -2, 0, -3, -4, -13131434, 1, 2, 33131, 4, 5313, 11];
// let min = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// const sentence =
//   "Это примfdfdfер строки, в которой нужно найти самое длинное слово";
// newText = sentence.split(" ");

// let max = 0;

// newText.forEach((el) => {
//   if (max < el.length) {
//     max = el.length;
//   }
// });
// console.log(max);

// function sumOneHungred(k, b) {
//   let numbers = [];
//   for (let i = 1; i <= 100; i++) {
//     numbers.push([i] * k + b);
//   }
//   return numbers;
// }
// console.log(sumOneHungred(2, 7));

arr = [];
let max = 0;
for (let i = 0; i < 5; i++) {
  arr[i] = [];
  for (let j = 0; j < 4; j++) {
    arr[i][j] = parseInt(prompt(`Введите значение [${i}][${j}]`));
    if (arr[i][j] > max) {
      max = arr[i][j];
    }
  }
}
console.log(max);
