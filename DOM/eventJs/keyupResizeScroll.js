const btn = document.querySelector(".btn1");
console.log(btn);

btn.addEventListener("keyup", function (event) {
  console.log("Кнопка отпущена:", event.key);
}); //Это событие происходит, когда пользователь отпускает клавишу на клавиатуре

window.addEventListener("scroll", function () {
  console.log("Прокрутили!");
});
//Это событие происходит, когда пользователь прокручивает элемент.

window.addEventListener("resize", function () {
  console.log("Окно изменено размером!");
});
//Это событие происходит, когда пользователь изменяет размер окна или элемента.

