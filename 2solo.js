let array = [
  [1, 2, 3, 4, 5],
  [5, 6, 731313, 8, 5],
  [9, 100, 11, 12, 5],
  [13, 124244, 15, 16, 1313],
];

const res = array.reduce((acc, item) => {
  return acc.concat(item);
}, []);
console.log(res);

// let max = [0][0];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     if (max < array[i][j]) {
//       max = array[i][j];
//     }
//   }
// }
// console.log(max);

// const set = "Я того все ненавижу";
// let some;
// max = 0;

// some = set.split(" ");
// some.forEach((el) => {
//   if (max < el.length) {
//     max = el.length;
//   }
// });
// console.log(max);

// newMass = [];

// function sumAll(k, b) {
//   for (let i = 1; i <= 100; i++) {
//     number = i * k + b;
//     newMass.push(number);
//   }
//   return newMass;
// }
// console.log(sumAll(2, 4));
