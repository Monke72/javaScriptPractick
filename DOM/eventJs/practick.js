//Создайте функцию для обработки событий нажатия клавиши на поле ввода текста
const input = document.querySelector(".input__val");
input.addEventListener("click", function () {
  console.log("you click on input");
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Ваш код, который должен выполниться при нажатии пробела

    // Проверка значения input
    if (input.value === "123") {
      input.value = "";
      console.log("Верный пароль");
    } else {
      console.log("Пароль неверный");
    }
  }
});

//Разработайте скрипт, который ловит и записывает события ввода клавиш на странице HTML.
window.addEventListener("keyup", function (ev) {
  console.log(ev.key);
});

//Создайте скрипт, который обновляет атрибуты ширины и высоты элемента изображения при изменении размера окна браузера пользователя
const body = document.body;
const image = document.querySelector(".img");

window.addEventListener("resize", () => {
  const imageWidth = getComputedStyle(image).width;
  const newWidth = parseFloat(imageWidth) - 10 + "px";
  image.style.width = newWidth;
});
