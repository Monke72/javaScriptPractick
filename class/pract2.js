class Car {
  oil = 0;
  problem = 0;

  constructor(power) {
    this.power = power;
  }
  startEngine() {
    return "Вы запустили авито";
  }
  getOil(oil) {
    this.oil += oil;
    console.log(`Вы заправили автомобиль на ${oil} литров`);
  }

  stopEngine() {
    return "Вы заглушили авто";
  }
  startEngineCar() {
    if (this.oil > 0 && this.problem === 0) {
      return this.startEngine();
    } else {
      return this.stopEngine();
    }
  }
}

class bmw extends Car {
  constructor(power, consumption) {
    super(power);
    this.consumption = consumption + " l";
  }
  gaz() {
    console.log("bmw Улетела");
  }
}
const bmwCar = new bmw(575, 20);
const car = new Car(675);
console.log(bmwCar.gaz());
// console.log(car);
// car.getOil(200);
// console.log(car.startEngineCar());
// console.log(car.startEngineCar());
