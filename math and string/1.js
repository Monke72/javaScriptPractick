const price = 99.5;
console.log(
  "окргление до целого числа",
  price.toFixed(),
  " до указзаного знака после запятой",
  price.toFixed(1)
);

console.log(price.toPrecision(3)); //окнугляем число отсчет начинается слева направо

console.log(price.toString(2)); //перевели число в двоичную систему исчесления
