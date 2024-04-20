let text = "Произвольный текст, содержащий слова разной длины, также JS";
let words = text.split(/\s+/).filter((word) => word.length === 5);
console.log(words);
