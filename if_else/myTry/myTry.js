const button = document.querySelector(".input__btn");
const input = document.querySelector(".age");
const welcome = document.querySelector(".welcome");
const run = document.querySelector(".run");

console.log(button);

button.addEventListener("click", () => {
  let num = input.value;
  if (num > 16) {
    welcome.classList.toggle("none");
  } else {
    run.classList.toggle("none");
  }
});
