function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}

const [sum, sub = "Вычитания нет", mult, ...other] = calcValues(42, 10); //с помощью запятой пропускаем один индекс

// const sum = result[0];
// const sub = result[1];
// const [sum, sub] = result;

console.log(sum, mult, other, sub);

console.log(sub);

function calcAny(a, b) {
  return [a + b, a * b, a + b * a];
}

const [sum2, ...rest] = calcAny(2, 7);

console.log(rest);
