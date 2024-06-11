let a = [1, 2, 3, 4];

let sum = 0;

a.forEach((el) => {
  sum += el;
});
// console.log(sum);

//prev - вычелсяемое значение
//item - все элементы массива

let b = a.reduce(function (prev, item, index) {
  // console.log(item);
  return prev + item;
}, 0);
// console.log(b);

const mass = [1, 3132, 2425, 321212, 5, 3];
const massmax = mass.reduce(
  (prev, item, index) => {
    if (prev[1] < item) {
      return [index, item];
    } else {
      return prev;
    }
  },
  [0, 0]
);
console.log(massmax);

//пишем prev[1] для того чтобы сравинвать каждый элемент с предыдущим

const data = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7],
];

const flat = data.reduce((prev, item) => {
  return prev.concat(item);
}, []);
console.log(flat);
