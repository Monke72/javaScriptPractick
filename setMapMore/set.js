const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);
set.add(10).add(20).add(52); //Добавление элемента
// console.log(set);

// console.log(set.has(30)); //проверка на то есть этот элемент внутри обьекта

// console.log(set.size); //кол-во элементов

// set.delete(1); //удаление элемента

// console.log(set.keys());

for (let key of set) {
  console.log(key);
}
