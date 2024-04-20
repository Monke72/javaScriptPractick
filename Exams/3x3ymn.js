// Создаем пустой двумерный массив 3x3
var matrix = [];
for (var i = 0; i < 3; i++) {
  matrix[i] = [];
}

// Вводим элементы в массив
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    matrix[i][j] = parseInt(
      prompt("Введите элемент для [" + i + "][" + j + "]")
    );
  }
}

// Вычисляем произведение элементов массива
var product = 1;
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    product *= matrix[i][j];
  }
}

console.log("Произведение элементов массива: " + product);
