const item = {
  title: "phone",
  fullProce: 100,
  calc(discount = 0) {
    console.log(this.fullProce - (discount / 100) * this.fullProce);
  },
};
item.calc(20);
