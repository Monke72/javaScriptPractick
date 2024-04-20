const user = {
  name: "Maks",
  age: 21,
  isMarried: false,
};
for (let key in user) {
  //С помощью in получаем ключи а то есть данные из массива
  //Получили данные из массива
  if (key == "age") {
    break;
  }
  console.log(key, user[key]);
}
