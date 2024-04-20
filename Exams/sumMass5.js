function calculateProduct() {
  let numbers = [];
  for (let i = 0; i < 5; i++) {
    let input = prompt(`Введите число ${i + 1}:`);
    numbers.push(parseFloat(input));
  }

  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  return product;
}

// Вызываем функцию и выводим результат в консоль
let result = calculateProduct();
console.log(result);
