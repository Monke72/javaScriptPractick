const cart = document.querySelector(".cart");
btn = document.querySelector(".any");
btn.addEventListener("click", () => {
  getEl();
});

async function getEl() {
  const product = await fetch("./products.json");
  const data = await product.json();
  data.map((el) => {
    const { id, img, title, price, discount } = el;
    const priceDiscount = price - (price * discount) / 100;
    const cardItem = `
        <div class="cart__product" data-product-id="${id}">
            <div class="cart__img">
                <img src="./images/${img}" alt="${title}">
            </div>
            <div class="cart__title">${title}</div>
            <div class="cart__block-btns">
                <div class="cart__minus">-</div>
                <div class="cart__count">1</div>
                <div class="cart__plus">+</div>
            </div>
            <div class="cart__price">
                <span>${price}</span>₽
            </div>
            <div class="cart__price-discount">
                <span>${priceDiscount}</span>₽
            </div>
            <div class="cart__del-card">X</div>
        </div>
        `;
    cart.insertAdjacentHTML("beforeend", cardItem);
  });
}
