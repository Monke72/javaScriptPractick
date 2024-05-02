const objCoffee = {
  latte: {
    price: 250,
    quantityWater: 300,
  },
  kapuch: {
    price: 350,
    quantityWater: 400,
  },
  cocktail: {
    price: 750,
    quantityWater: 500,
  },
};

class CoffeMachine {
  _waterAmount = 0;
  money = 0;

  constructor(power, coffeeName) {
    this.power = power;
    this.coffeeName = coffeeName;
  }
  set addWater(value) {
    this._waterAmount += value;
  }
  get waterAmount() {
    return this._waterAmount;
  }

  set addMoney(value) {
    this.money += value;
  }
  get moneyAmount() {
    this.money += value;
  }

  buyCoffee(coffeeName) {
    if (coffeeName.price > this.money) return "У вас недостаточно средств";
    if (coffeeName.price < this.money) {
      this.money -= coffeeName.price;
    }
    return `Мы сделали кофе`;
  }

  createCoffee() {
    if (this._waterAmount >= 200) {
      this._waterAmount -= 200;
      console.log("МЫ создали чашку кофе");
    } else {
      console.log("Извините но вода закончилась");
    }
  }
}

const mainCoffeMachine = new CoffeMachine(100); //проверка ялвяется обьект экземпляром класса

console.log(mainCoffeMachine.buyCoffee(objCoffee.latte));
console.log(mainCoffeMachine.buyCoffee(objCoffee.latte));
mainCoffeMachine.addMoney = 1000;
console.log(mainCoffeMachine.buyCoffee(objCoffee.latte));
console.log(mainCoffeMachine.buyCoffee(objCoffee.latte));
console.log(mainCoffeMachine.buyCoffee(objCoffee.latte));
console.log(mainCoffeMachine.buyCoffee(objCoffee.latte));
// console.log(mainCoffeMachine instanceof CoffeMachine);

// console.log(mainCoffeMachine.waterAmount);
// mainCoffeMachine.addWater = 1000;
// console.log(mainCoffeMachine.waterAmount);

// mainCoffeMachine.createCoffee();
// mainCoffeMachine.createCoffee();
// mainCoffeMachine.createCoffee();
// mainCoffeMachine.createCoffee();
// mainCoffeMachine.createCoffee();
// mainCoffeMachine.createCoffee();
