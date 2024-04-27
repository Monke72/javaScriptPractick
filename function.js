// //-------------
// function logHello() {
//   console.log("hi");
// }
// logHello();

// //-----------
// const massage = "global hello";

// function logMassage() {
//   const massage = "local hello";

//   console.log(massage);

//   for (let i = 0; i < 3; i++) {
//     const massage = `Интерация цикла N${i}`;
//     console.log(massage);
//   }
// }

// logMassage();

// console.log(massage);

// //------------
// function sum(a, b) {
//   return a + b;
//   //все что находится за return не выполняется ибо
//   //когда он выполняется функция заканчиввает выполнение
// }

// const result = sum(100, 1);
// console.log(result);

// //--------------
// function getAgeType(age) {
//   if (typeof age !== "number") {
//     return "Возраст указан некоректно";
//   }
//   if (age < 1 || age > 125) {
//     return "Такого не может быть";
//   }

//   if (age < 18) {
//     return "Несовершеннолетний";
//   }
//   return "Взрослый";
// }
// console.log(getAgeType(-100));

// //-------------
// function getSecretMassage(name) {
//   if (!name) return; //Если ничего не написано в елемент ,
//   //останавливаем выполнение
//   return `woo, i know you! You ${name}!`;
// }
// console.log(getSecretMassage(""));

// //calback
// const logMassageToo = (actionBefore, actionAfter) => {
//   actionBefore();
//   console.log("hi");
//   actionAfter();
// };
// const fn1 = () => {
//   console.log("before");
// };
// const fn2 = () => {
//   console.log("after");
// };

// logMassageToo(fn1, fn2);

// //------------
// const validate = (hasAcces) => {
//   if (hasAcces) {
//     return () => console.log("Доступ разрешен");
//   } else {
//     return () => console.log("Доступ pfghtoty");
//   }
// };
// const logMassageThree = validate(true);
// logMassageThree();

// // //Сокращение фунцкци. жо понятного стостояния
// // const showMenu = () => {
// //   document.querySelector(".menu").classList.add("is-active");
// // };
// // document.querySelector(".bnt").addEventListener("click", () => {
// //   showMenu();
// // });

// function calculateNumber(initialValue) {
//   let x = initialValue;
//   x = x + 100;
//   x = x / 5;
//   return x;
// }
// const result1 = calculateNumber(100);
// console.log(result1);

// function calculateS(radius) {
//   return 3.14 * radius ** 2;
// }
// console.log(calculateS(22));

// function createHTMLElement(tag = "button", text = "Отправить", id) {
//   const element = document.createElement(tag);
//   if (id) {
//     element.id = id;
//   }
//   element.innerText = text;

//   return element;
// }

// const h1Element = createHTMLElement("h1", "просто текст");

// document.body.append(h1Element);

// const element = createHTMLElement();
// document.body.append(element);

// function lofArgsToConsole() {
//   if (!arguments.length) {
//     return;
//   }
//   // console.log(arguments);
//   for (let argument of arguments) {
//     console.log(argument);
//   }
//   console.log("аргументов больше нет");
// }

// lofArgsToConsole(1, 313, 1314, 143);

// const sayHello = function () {
//   console.log("hello");
// };
// sayHello();

// sayBye = () => {
//   console.log("bye");
// };
// sayBye();

// const brokenLinks = ["vk", "youtube", "facebook"];

// const fixLinksArray = (linksArray) => {
//   const correctLinks = [];
//   linksArray.forEach((brokenLink) => {
//     correctLinks.push("https://" + brokenLinks + ".com");
//   });
//   return correctLinks;
// };
// console.log(fixLinksArray(brokenLinks));

//this
const item = {
  title: "Phone",
  fullPrice: 100,
  calculatePrice(discountPercent = 0) {
    console.log(this.fullPrice - (discountPercent / 100) * this.fullPrice);
  },
};

item.calculatePrice(20);

function calcDiscount(age) {
  if (age > 65) {
    console.log(this.price / 2);
  } else {
    console.log(this.price);
  }
}
const item2 = {
  title: "phone",
  price: 1000,
};
calcDiscount.call(item2, 30); //call принимает скольок угодно аргументов по одному а applу вторым аргументом массив значений, удобен когда неизвестно скольок аргументов будет передано в функции apply записывается как массив в []

function createItem(title, price) {
  this.title = title;
  this.price = price;
  return this;
}
const item1 = new createItem("phone", 100);
const item4 = new createItem("phone", 100332);
const item3 = new createItem("phone", 10320);
console.log(item1, item3, item4);

const obj = {
  lastName: "ivanov",
  firstNames: ["Petr", "Ivan"],
  logFullNames1: function () {
    this.firstNames.forEach(function (name) {
      console.log(`${this.lastName} ${name}`);
    }, this);
  },
  logFullNames2: function () {
    this.firstNames.forEach((name) => {
      console.log(`${this.lastName} ${name}`);
    });
  },
};

obj.logFullNames1();
obj.logFullNames2();

const item5 = {
  title: "phone",
  logTitle: function () {
    setTimeout(() => {
      console.log(`Product: ${this.title}`);
    });
  },
};
item5.logTitle();

//Замыкания

let x = 1;
const logToConsole = function () {
  console.log(x);
};

x = 2;
logToConsole();

// function makeCounter(count) {
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter(0);
// let counter2 = makeCounter(0);

// alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2());

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  function log() {
    let massage = `Count is ${count}`;
    console.log(massage);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
