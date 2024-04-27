const obj = [1, 21, 21, 2, 1, 21, 1, 1, 1];

objNew = Array.from(new Set(obj));

console.log(objNew);

const doubleObj = objNew.map((value) => value * 2);
console.log(doubleObj);
