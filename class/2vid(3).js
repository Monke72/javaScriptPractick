class CoffeMachine {
  _waterAmount = 0;

  constructor(power) {
    this.power = power;
  }
  set addWater(value) {
    this._waterAmount += value;
  }
  get waterAmount() {
    return this._waterAmount;
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

console.log(mainCoffeMachine instanceof CoffeMachine);

console.log(mainCoffeMachine.waterAmount);
mainCoffeMachine.addWater = 1000;
console.log(mainCoffeMachine.waterAmount);

mainCoffeMachine.createCoffee();
mainCoffeMachine.createCoffee();
mainCoffeMachine.createCoffee();
mainCoffeMachine.createCoffee();
mainCoffeMachine.createCoffee();
mainCoffeMachine.createCoffee();
mainCoffeMachine.createCoffee();
