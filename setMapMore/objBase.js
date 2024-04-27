const obj = {
  name: "artem",
  age: 26,
  job: "front",
};

const ent = [
  ["name", "Artem"],
  ["age", 26],
  ["job", "Front"],
];

// console.log(Object.entries(obj)); //представляем обьект в виде массива
// console.log(Object.fromEntries(ent));

const map = new Map(ent);

// console.log(map.get("job"));

map.set("newField", 42).set(obj, "value of object").set(NaN, "Nan ??");

// console.log(map.get(NaN));

map.delete("job");
// console.log(map.has("job")); //проверка на то есть ли в map job
// console.log(map.size); //узнаем сколько полей внутри map
// map.clear(); //Очистка map

for (let [key, value] of map) {
  // console.log(key, value); //циклом нашли ключи и значения всей map
}

for (let val of map.values()) {
  //заменив value на keys получим ключи
  // console.log(val);
} //получили только значения из map

map.forEach((val, key, m) => {
  console.log(val, key);
});
