const div = document.querySelector(".div");
const div1 = document.querySelector(".any");
const div2 = document.querySelector(".some");
console.log(div.getAttribute("attr")); //Получаем значение атрибута
console.log(div.setAttribute("attr", "111")); //Перезаписываем значение текущего аттрибута 1-название 2-то что внутри
console.log(div.getAttribute("attr"));
div.removeAttribute("attr"); //удаляем аттрибут

console.log(div1.dataset.age);
//В фронтенде общепринято писать аттрибуты через data- и название и получать в js такие элементы можно через dataset

console.log(div2.dataset.ageAge2);
//Если несколько слов в атриббуте они пишутся через каммелКейс(2значение и следующие начичнаются с большой буквы)

const newDiv = document.createElement("div");
const newDivText = document.createTextNode("any text");

newDiv.prepend(newDivText);

// console.log(newDiv);

const body = document.body;
body.after(newDiv);
//append - вставляет элемент в конец
//prepend - в начала
//before - после элемента
//after - после элемента

setTimeout(() => {
  newDiv.remove();
}, 3000);

const bodyClon = body.cloneNode(true);
//Клонировали body

body.after(bodyClon);
