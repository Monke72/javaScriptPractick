const cars = {
  car1: {
    id: 1,
    photo:
      "https://avatars.dzeninfra.ru/get-zen_doc/3523766/pub_63d5f1f9f86b2d2a16b3c17d_63d5f2b3db90d61608ac12d3/scale_1200",
    model: "BMW",
    price: "7.5 mln",
  },
  car2: {
    id: 2,
    photo:
      "https://top-tuning.ru/upload/images/news/106568/alfa_romeo_giulia_&_stelvio_estrema_2.jpg",
    model: "Alfa Romeo",
    price: "5.5 mln",
  },
  car3: {
    id: 3,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TAW37YZY3Oj9v4hWmvDgASUWm8YfM3Fv5UrhwTLd8g&s",
    model: "Audi",
    price: "6.5 mln",
  },
};

const massCars = [cars.car1.id, cars.car2.id, cars.car3.id];
massCars.forEach((el) => {
  if (el === 1) {
    console.log("how");
  }
});

console.log(massCars);

const carsInner = `
<div class="card" id = ${cars.car1.id}>
<img
  class="card__image"
  src=${cars.car1.photo}
  alt=""
/>
<div class="card__name">${cars.car1.model}</div>
<p class="card__price">${cars.car1.price}</p>
<button class="card__button">Купить</button>
</div>
<div class="card" id = ${cars.car2.id}>
<img
  class="card__image"
  src=${cars.car2.photo}
/>
<div class="card__name">${cars.car2.model}</div>
<p class="card__price">${cars.car2.price}</p>
<button class="card__button">Купить</button>
</div>
<div class="card" id = ${cars.car3.id}>
<img
  class="card__image"
  src=${cars.car3.photo}
  alt=""
/>
<div class="card__name">${cars.car3.model}</div>
<p class="card__price">${cars.car3.price}</p>
<button class="card__button">Купить</button>
</div>`;

document.querySelector(".cards").innerHTML = carsInner;

const buttonBuy = document.querySelectorAll(".card__button");
const bascet = document.querySelector(".bascet__counter");
console.log(buttonBuy);
let itemCount = 0;

function toggleButtonState(button) {
  if (button.textContent === "Купить") {
    button.textContent = "Удалить из корзины";
    addInBascet();
  } else {
    button.textContent = "Купить";
    removeFromBascet(); //если по клику тект не купить уменьшаем счетчик
  }
}

function addInBascet() {
  if (itemCount < massCars.length) {
    itemCount++;
  }
  bascet.classList.remove("none");
  bascet.textContent = itemCount;
}

function removeFromBascet() {
  itemCount--;
  if (itemCount === 0) {
    bascet.classList.add("none");
  } else {
    bascet.textContent = itemCount;
  }
}

let massBascet = [];
const allIds = Object.values(cars).map((car) => car.id); //map() позволяет нам преобразовать каждый элемент массива в новый элемент. В данном случае мы извлекаем значение id из каждого объекта и помещаем его в новый массив

buttonBuy.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("new__button");
    toggleButtonState(el);
    let parentId = el.parentNode.id; // Получаем id родительского элемента
    allIds.forEach((e) => {
      if (e === document.getElementById(parentId)) {
        massBascet.push[parentId];
        console.log(massBascet);
      }
    });
  });
});
console.log(massBascet);
