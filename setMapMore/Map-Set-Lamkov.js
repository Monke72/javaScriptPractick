const { object } = require("prop-types");

const user = {
  name: "artem",
  age: 28,
  city: "tlt",
};

const userEntries = Object.entries(user);

userEntries.forEach(([key, value]) => {
  // console.log("name sv", key);
  // console.log("info", value);
});

const userEntriesFormatted = userEntries.map(([key, value]) => {
  return [key.toUpperCase(), `--${value}--`];
});

// console.log(userEntriesFormatted);

const data = new Map([
  [1, "один как число"],
  ["1", "один как строка"],
]);

data.set(22, "sas"); //добавляем ключ , через delete удаляем

console.log(data.get(22)); //получаем ключ

console.log(data.has("maa")); //проверяем существоует ли такой ключ в коллекции

console.log(data.size); //возвращает колличество пар (число-значение)

//через keys , values , entries можем получить сопуствующие данные

for (const key of data.keys()) {
  console.log("key:", key);
}

data.clear(); //полностью ощичает коллекцию

const map = new Map(Object.entries(user));

map.forEach((value, key) => {
  console.log(`${key} : ${value}`);
}); //получили коллекцию из обычного объкета

//для добавления в set испольуется add , все остальные свойста аналогичны map
