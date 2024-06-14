//
const data = ["aleks", 22];
const [name, age] = data;
console.log(age);
//
const pricec = [222, 2, 1, 31, 34, 222, 2];
console.log("index:", pricec.indexOf(222, 5)); //вторым значение задаем индекс от которого начинается отсчет
console.log("indexLast:", pricec.lastIndexOf(2)); //ищем с конца
//
const users = [
  { name: "damn", age: 21, city: "moscow" },
  { name: "sake", age: 231, city: "piter" },
  { name: "asa", age: 21, city: "polsk" },
];

console.log(users.findIndex((user) => user.name === "sake")); //поиск индекса в массиве обьектов
console.log("el Includes:", pricec.includes(2));

console.log(users.every((user) => user.age >= 18));

const filterUsers = users.filter(({ name, age }) => {
  return name === "damn" || age >= 28;
});
console.log(filterUsers);

const usersForm = users.map(({ name, age, city }) => {
  return `${name} life ${age} year in ${city}`;
});
console.log("Map:", usersForm.join());

const srAge = users.reduce((acc, user) => {
  acc += user.age;
  return acc;
}, 0);
console.log(srAge / users.length);
