function createItem(title, price) {
  this.title = title;
  this.price = price;
  console.log(this);
  return this;
}
new createItem("phone", 1000);
