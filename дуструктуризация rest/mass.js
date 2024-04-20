let [age, height, grade = 10] = [16, 170, 10]; //Задаем начальное базовое значние на случай если ничего присвоено не убдет
console.log(age);

let a = 13;
let b = 69;
[a, b] = [b, a];
console.log(a, b);

const { name, x, y } = { name: "Player1", x: 50, y: 44 };

console.log(name, x, y);
