let obj = { name: "weakmap" };

// const arr = [obj];
// obj = null;
// console.log(arr[0]);

const map = new WeakMap([[obj, "obj data"]]);
obj = null;

console.log(map.has(obj));
