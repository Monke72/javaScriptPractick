const arr = [
  {
    name: "sanay",
    level: "hacker",
  },
  {
    level: "doomer",
  },
  {
    level: "somer",
  },
  {
    level: "momer",
  },
  {
    name: "aleks",
    level: "hacker",
  },
];

//some если хотя бы 1 элмент подходит  под это значение
let res = arr.some((item) => {
  return item.level === "hacker";
});
console.log(res);

//every если каждый элемент соотвествуе заданному значению
let result = arr.every((item) => {
  return item.level === "hacker";
});
console.log(result);

//find если совпадения есть он возвращает сам item
let result3 = arr.find((item) => {
  return item.level === "hacker";
});
console.log(result3);
