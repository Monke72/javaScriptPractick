const name = "aleks";
console.log(name[name.length - 1]); //получили полседний символ строки

console.log(name.at(0));
console.log(name.at(-1)); //получили полседний символ строки

const massage = `  hi   `;
const mass = massage.trim(); //обрезаем пробелы с 2 концов строки
console.log(mass);

const massage2 = "hi its Kenny";
console.log(massage2.indexOf("its Kenny")); //находим с какой строки начинается выражение которые мы ищем
//можно заменять на includes

console.log(massage2.startsWith("hi", 0));
console.log(massage2.endsWith("hi", 0));
//делаем проверки начинается или закинчивается строка с этих символом , задавая 2 аргументом с какого индекса начнется отсчет

const str = "JavaScript";
console.log(str.substring(0, 4)); //обрезали строку от 0 до 4 индекса

console.log(str.repeat(3));

console.log(massage2.replace("Kenny", "Daddy")); //меняем слово на указанное
console.log(massage2.replaceAll("Kenny", "Daddy")); //replaceAll меняет все слова указанны 1 аргументом на 2анг

const number = `7(999) 999-99-99`;
console.log(number.replace(/\d/g, `#`));
