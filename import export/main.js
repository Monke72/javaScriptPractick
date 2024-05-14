// import name from "./vars.js";
// console.log(name);

//При импорте дефолтного экспорта его имя можно менять
import newName from "./vars.js";
console.log(newName);

//Импорт именнованого экспорта
// import { age } from "./vars.js";
// console.log(age);

//Импорт несколький именнованых экспортов
// import { age, gender } from "./vars.js";

// console.log(gender);
// console.log(age);

//Импорт именованных экспортов с переименованием
// import { age as newAge, gender as newGender } from "./vars.js"; //Ставим после переменной as переименовывая ее в новую

// console.log(newAge);

//Импорт всех именнованых экспортов
// import * as vars from "./vars.js";
// console.log(vars);
// //Получаем набор всех экспортов и из него различные переменные
// console.log(vars.age);

// Импорт дефолтного и всех именнованых экспортов
import userName, * as vars from "./vars.js";

console.log(userName, vars.age, vars.gender);
