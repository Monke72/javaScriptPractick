const printHello = (text) => {
  console.log(text);
};
let timerId = setTimeout(printHello, 2000, "text");

clearTimeout(timerId); //удаление таймера

console.log(timerId);
