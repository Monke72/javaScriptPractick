let count = 1;
console.log("Cicle start");
while (count < 10) {
  console.log(count);

  if (count % 5 === 0) {
    console.log("Цикл прерван дострочно");
    break;
  }
  count++;
}
console.log("Cicle exit");
