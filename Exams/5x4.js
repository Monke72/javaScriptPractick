//Создаем пустой массив 5x4
var array = [];
for (var i = 0; i < 5; i++) {
  array[i] = [];
  for (var j = 0; j < 4; j++) {
    array[i][j] = parseInt(prompt("Введите число для [" + i + "][" + j + "]"));
  }
}

// Находим максимальное значение в массиве
var max = array[0][0];
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 4; j++) {
    if (array[i][j] > max) {
      max = array[i][j];
    }
  }
}

//Выводим результат
console.log("Максимальное значение в массиве: " + max);
