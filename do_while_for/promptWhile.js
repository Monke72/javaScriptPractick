let word = "";
while (word.length < 5) {
  const value = prompt("Введите букву");
  word = word + value;
  if (value.length === 0) {
    break;
  }
  console.log(word);
}
