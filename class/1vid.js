// const animal = {
//   name: "animal",
//   age: 5,
//   hasTail: true,
// };
// console.log(animal);

class Animal {
  static type = "Animal";

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice() {
    console.log("i am animal!");
  }
}

const animal = new Animal({
  name: "animal",
  age: 5,
  hasTail: true,
});

// console.log(animal);

// console.log(animal.voice());

// console.log(Animal.type);

class Cat extends Animal {
  static type = "CAT";
  constructor(options) {
    super(options); //добавили свойство которое нет у родительского элемента
  }

  voice() {
    super.voice(); //Здесь благодаоя super получаем оба метода
    console.log("I am CAT"); //Перевызваем метод и он затирает родительский
  }

  get ageInfo() {
    return this.age * 7; //выполняем функцию внутри класса
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: "cat",
  age: 7,
  hasTail: true,
  color: "black",
});

console.log(cat);
console.log(Cat.type); //Обращаемя к CAt чтобы получить значение
console.log(cat.voice()); //Получаем обновленный метод

console.log(cat.ageInfo); //возвращем новое значени элемента с 46 строки

cat.ageInfo = 8; //поменяли значение
console.log(cat.ageInfo); //Запусили метод с обновленным значением
