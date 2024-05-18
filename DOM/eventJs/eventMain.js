const buttons = document.querySelectorAll(".btn");

const handleClick = (event) => {
  console.log(parseInt(event.target.dataset.number));
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);
  event.stopPropagation(); //Событие работает тольок для кнопки не поднимаясь по элемнт вверх
};

//target элемент на который мы изначально кликуннули
//currentTarget элемент на котрый мы повесили обработчик событий
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// window.addEventListener("click", function (event) {
//   console.log("window click!", event);
// });
