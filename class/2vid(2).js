class Animal {
  static printName = "Это класс для создания животного";
  static method1() {
    console.log("Это код метода класса");
  }
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log("We stop");
  }
}
class Rabbit extends Animal {
  //Унаследовали все методы и свойства класса Animal
  constructor(name, age) {
    //создали новые свойства
    super(name);
    this.age = age;
  }
  hide() {
    console.log("Я спрятался");
  }
  stop() {
    super.stop();
    this.hide();
  }
}

const rabbit = new Rabbit("кролик", 2);
rabbit.stop();
// rabbit.run(10);
// console.log(rabbit);
console.log(rabbit);
Rabbit.method1();
