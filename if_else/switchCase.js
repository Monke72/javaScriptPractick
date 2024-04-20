const name = "БОрис";
switch (
  name //начало любого условия
) {
  case "Иван": //case работает как if else , break овтечает за конец выполения при найденном результате
    console.log(name + "iva");
    break;
  case "БОрис":
    console.log(name + "Bor");
    break;
  case "soma":
    console.log(name + "Sau");
    break;
  default: //отвечает за else
    console.log("no way");
    break;
}
let sum = 0;

function solution(numbers) {
  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    } else if (i % 3 === 0) {
      console.log(i);
    } else if (i % 5 === 0) {
      console.log(i);
    } else if (i < 0) {
    }
  }
}
solution();
