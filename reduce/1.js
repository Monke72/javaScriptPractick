//acc - аккамулятор , накапливает результаты   предыдущий вызовов  функции
//currentValue - текущий элемент массива для которого вызывается функция обратного вызова на каждой итерации
//index - индекс текцщего элемента в массиве
//array - сам массив к которому применяется reduce
//initialValue - 2 значение , это начальное значение

const array = [1, 2, 3, 4, 5];

const res = array.reduce((acc, currentValue, index, array) => {
  // console.log("acc", acc);
  // console.log("curV", currentValue);
  return acc + currentValue;
}, 0);
// console.log(res);

const arr = ["ivan", "sergey", "leha"];

const result = arr.reduce((acc, currentValue, index, array) => {
  return {
    ...acc,
    [index]: currentValue,
  };
}, {});
console.log(result);
