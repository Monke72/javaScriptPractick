const arr = [
  {
    name: "aels",
    id: 23,
  },
  {
    id: 22,
  },
  {
    name: "sol",
    id: 2212,
  },
];

const res = arr.find((item) => {
  return item.id === 2212;
});
console.log(res);

const res2 = arr.some((item) => {
  return item.id === 22;
});
console.log(res2);

const num = [21, 1, 3, 41, 4, 24];

// const res3 = num.find((item) => {
//   return item % 2 === 0;
// });

// console.log(res3);

num.forEach((el) => {
  if (el % 2 === 0) {
    console.log(el);
  }
});
