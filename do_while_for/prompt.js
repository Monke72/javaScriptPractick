const input = prompt("Введите число");
const number = Number(input);

if (!isNaN(number)) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number}*${i}=${i * number}`);
  }
}
