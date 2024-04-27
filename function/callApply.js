function calcDiscount(age) {
  if (age > 65) {
    console.log(this.price / 2);
  } else {
    console.log(this.price);
  }
}
const item2 = {
  title: "phone",
  price: 1000,
};
calcDiscount.call(item2, 30); //в 1 знаечние идет item во второй аргумент из функции
const disc = calcDiscount.bind(item2, 70); //bind лишь привзявыет значиения но не вызывает функцию
console.log(disc());
