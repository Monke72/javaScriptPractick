const propName = prompt("Имя для добавления");
const propValue = prompt(`Какое значиние запсиать в свойство ${propName}`);

const obj = {
  [propName]: propValue, //без [] нельзя использовать переменные , запишеться тольок название
};
console.log(obj);
