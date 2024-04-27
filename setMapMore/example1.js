const map1 = new Map();

map1.set(1, "Леха").set(3, "bjrnc").set(2, "alex");
console.log(map1);

map1.forEach((el) => {
  console.log(el);
});

console.log(map1.has(1));

console.log(...map1.keys());
console.log(...map1.values());
