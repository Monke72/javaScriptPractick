const user1 = {
  name: "aleks",
  city: "moskow",
};

const user2 = {
  name: "maks",
  city: "now",
};

const { city = "не указан" } = user1; //Если поля сити не будет в обьекте испоьзуем аргумент справа
console.log(city);

const { city: user2city } = user2;
console.log(user2city);
