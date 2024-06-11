//Создайте функцию для обработки событий нажатия клавиши на поле ввода текста
const input = document.querySelector(".input__val");
const div = document.createElement("div");
const body = document.body;

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Ваш код, который должен выполниться при нажатии пробела
    // Проверка значения input
    if (input.value >= 16) {
      if (div.classList.contains("wrong")) {
        div.classList.remove("wrong");
      }
      div.classList.add("loyal");
      div.textContent = "Вам разрешено войти";
      body.append(div);
      input.value = "";
    } else {
      div.classList.add("wrong");
      div.textContent = `Вход запрещен , подождите еще ${16 - input.value} лет`;
      body.append(div);
      input.value = "";
    }
  }
});

function passwordInfo() {}

//Разработайте скрипт, который ловит и записывает события ввода клавиш на странице HTML.
window.addEventListener("keyup", function (ev) {
  console.log(ev.key);
});

//Создайте скрипт, который обновляет атрибуты ширины и высоты элемента изображения при изменении размера окна браузера пользователя
const image = document.querySelector(".img");

window.addEventListener("resize", () => {
  const imageWidth = getComputedStyle(image).width;
  const newWidth = parseFloat(imageWidth) - 10 + "px";
  image.style.width = newWidth;
});
