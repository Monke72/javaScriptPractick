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

const carsInner = `
<div class="card">
<img
  class="card__image"
  src=${cars.car1.photo}
  alt=""
/>
<div class="card__name">${cars.car1.model}</div>
<p class="card__price">${cars.car1.price}</p>
<button class="card__button">Купить</button>
</div>
<div class="card">
<img
  class="card__image"
  src=${cars.car2.photo}
/>
<div class="card__name">${cars.car2.model}</div>
<p class="card__price">${cars.car2.price}</p>
<button class="card__button">Купить</button>
</div>
<div class="card">
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
console.log(buttonBuy);

function addInBascet() {
  document.body.classList.toggle("any");
}

buttonBuy.forEach((el) => {
  el.addEventListener("click", addInBascet);
});
