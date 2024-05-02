let arr = [2, 33, 1, 31, 3, 13, 1, 2, 1];

const newArr = [...new Set(arr)];

try {
  if (!newArr.length) {
    //если длинна массива равна нулю выдаем ошибку
    throw new Erorr("Массив пуст");
  } else {
    console.log(newArr);
  }
} catch (err) {
  console.log("Извините товаров нет в наличии");
}
