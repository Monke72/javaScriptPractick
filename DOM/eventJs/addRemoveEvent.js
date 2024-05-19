const button = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const btn = document.querySelectorAll(".btn");

function hundleClick() {
  console.log("click");
}

button.addEventListener("click", hundleClick);
button2.addEventListener("click", hundleClick);

button2.removeEventListener("click", hundleClick); //Удаление не работает с безымянной функцией,при удалении мы должны всегда казывать название фенцкции

btn.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(`you click ${el.textContent}`);
  });
});

const list = document.querySelector("#list");
list.addEventListener("click", function (event) {
  const target = event.target; //Отлавливаем конкретный эелмент
  console.log(target.className);

  if (target.className === "item2") {
    target.style.color = "red";
  } else {
    target.classList.toggle("any");
  }
});
