const letters = ["a", "b"];

letters.unshift("q", "d"); //добавиили в начало массива элементы
console.log(letters);

letters.pop(); //удаляет последний элмент в массиве и может вывести его если обернуть в переменную
letters.shift(); //удаляет первый элмент в массиве и может вывести его если обернуть в переменную

console.log(letters.join(", ")); //склеиваем элменты в массиве

const massege = "ked fkjf mfeifj";

console.log(massege.split(", ").join(", ")); //такая связка обычно испрользуется когда мы перебираем какие-либо значения в цикле

const arr1 = [1, 2, 3, []];
let arr2 = [...arr1]; //копируем массив чтобы измения работали для кдалого отдельно

let arr3 = [1, 2, 3, []];

console.log(arr1);
console.log(arr2);

const tooMass = arr1.concat(arr2);
console.log(tooMass);

const arrayEgual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const value1 = arr1[i];
    const value2 = arr2[i];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!arrayEgual(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};
console.log(arrayEgual(arr1, arr3));
