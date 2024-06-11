// //Записать в одномерный массив значения функции f (x) = kx+b, при x =1,2,...,100 , k и
// //b вводятся с клавиатуры. Результат вывести на экран.

// function sumOneHungred(k, b) {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i * k + b);
//   }
// }
// // console.log(sumOneHungred(2, 1));

// //Произвести следующую обработку 15 целых чисел: найти количество отрицательных чисел, количество нулевых и подсчитать сумму положительных чисел.

// const arr = [21, 21, 3, 1, 31, -31121, , 2];

// let good = [];
// let sum = 0;
// function nums(el) {
//   el.forEach((num) => {
//     if (num > 0) {
//       good.push(num);
//       sum += num;
//     }
//   });
// }
// nums(arr);
// console.log(sum);

// //Написать программу ввода в массив 5x4 элемента чисел и поиска в нем максимального значения не использую функцию max
// let arr = [];

// function sumAll() {
//   sum = 0;
//   for (let i = 0; i < 5; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 4; j++) {
//       arr[i][j] = parseInt(prompt(`[[${i}][${j}]]`));
//       if (arr[i][j] > sum) {
//         sum = arr[i][j];
//       }
//     }
//   }
//   console.log(sum);
// }
// 21
// sumAll();

// //. Определить количество символов в самом длинном слове строки. Слова отделяются знаком “/”

// let arr = `ассаламалейкум/дорогой/dsssssssssdsddsssss`;
// let max = 0;

// let newArr = arr.split("/");
// newArr.forEach((el) => {
//   if (el.length > max) {
//     max = el.length;
//   }
// });
// console.log(max);

//В произвольном тексте вывести в консоль слова, начинающиеся с буквы А.

// let arr = `Arttt dsdsd fsfsf ass`;

// let newArr = arr.split(" ");

// function searchA(el) {
//   el.forEach((word) => {
//     if (word.charAt(0) == "A" || word.charAt(0) == "a") {
//       console.log(word);
//     }
//   });
// }
// searchA(newArr);

//В произвольном тексте найти и вывести в консоль все слова длиной 5 символов.

// let arr = `fdlfkl lfgkldgfkd mplgfkdolgk,l gdkgl 23111`;
// const newArr = arr.split(" ");

// function searchWordFiveLenght(el) {
//   el.forEach((word) => {
//     if (word.length === 5) {
//       console.log(word);
//     }
//   });
// }

// searchWordFiveLenght(newArr);

//Разработать класс Book c параметрами автор год написания, количество страниц.Подготовить методы для вывода этих данных. Показать на примере созданногообъекта.
// class Book {
//   constructor(author, date, strLength) {
//     this.author = author;
//     this.date = date;
//     this.strLength = strLength;
//   }

//   authorInfo() {
//     console.log(this.author);
//   }
// }
// let book = new Book("shekspir", 1211, "12");
// book.authorInfo();

//. Разработать класс building с параметрами apartment, area. наследуйтесь от классаbuilding создав класс house. Разработать метод класса house добавляющий жильцов всписок и методы выводящий его.

// let people = [];

// class building {
//   constructor(apartemnts, area, appartmensBusy) {
//     this.apartemnts = apartemnts;
//     this.area = area;
//     this.appartmensBusy = appartmensBusy;
//   }

//   clearApp() {
//     if (this.apartemnts > this.appartmensBusy) {
//       return `Вы можете заселиться свободных мест ${
//         this.apartemnts - this.appartmensBusy
//       }`;
//     } else {
//       return "Извините свободных мест нет";
//     }
//   }
// }

// class house extends building {
//   constructor(apartemnts, area, appartmensBusy, color) {
//     super(apartemnts, area, appartmensBusy);
//     this.color = color;
//   }

//   addRes(pip) {
//     people.push(pip);
//     this.apartemnts--;
//     this.appartmensBusy++;
//     return people;
//   }
// }

// const House = new house(21, "ka", 1, "black");
// console.log(House.color);
// console.log(House.addRes("elena"));
// console.log(House.addRes("Melena"));
// console.log(House.apartemnts);

// const build = new building(42, "LA", 12);
// console.log(build.clearApp());

//Разработать класс Computer с параметрами RAM, processor_cores. наследуйтесь откласса Computer создав класс PC. Разработать метод класса PC install добавляющий в список название ПО и метод get_programs выводящий их список.

// class Computer {
//   constructor(RAM, proccesor) {
//     this.ram = RAM;
//     this.proccesor = proccesor;
//   }
// }

// const computer = new Computer("8Gb", "intel i7-7700k");
// let PO = [];

// class PC extends Computer {
//   PcInstall(programm) {
//     PO.push(programm);
//   }

//   getProgramms() {
//     return PO;
//   }
// }
// const pc = new PC();

// pc.PcInstall("word");
// pc.PcInstall("excel");
// console.log(pc.getProgramms());

//Разработать функцию для подсчета количества гласных букв в произвольном тексте.

// function getVowels(str, vowels = `аеёиоуыэюя`) {
//   return str
//     .toLowerCase()
//     .split(``)
//     .reduce((acc, cur) => (vowels.includes(cur) ? (acc += cur) : acc), ``);
// }
// const vowels = getVowels(`ехал грека через реку`);
// vowels; // ‘еаеаеееу’
// console.log(vowels.length); // 8

//Разработать класс Door который содержит булевое свойство is_open: разработатьметоды open и close меняющие состояние is_open. Добавить метод checkвозвращающий текущее состояние двери.

// class Door {
//   constructor(isOpen) {
//     this.isOpen = isOpen;
//   }

//   open() {
//     this.isOpen = true;
//   }
//   close() {
//     this.isOpen = false;
//   }

//   check() {
//     return `door open : ${this.isOpen}`;
//   }
// }

// const door = new Door("");

// door.close();
// console.log(door.check());

//Разработать функцию деления любого числа на 2. Продолжать деление до тех пор покачисло больше 1. Вывести на экран количество потребовавшихся делений.

// function countEl(num) {
//   let count = 0;
//   for (let i = num; i > 1; i /= 2) {
//     count++;
//   }
//   return count;
// }

// console.log(countEl(52));

//Разработать функцию вычитания из любого числа цифру 2. Продолжать вычитание дотех пор пока число больше 0. Вывести на экран количество потребовавшихсявычислений.

// function countMinus(num) {
//   let count = 0;
//   for (let i = num; i > 0; i -= 2) {
//     count++;
//   }
//   return count;
// }

// console.log(countMinus(72));

// function toUpperCase(text) {
//   const vowels = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
//   const textWords = text.split("");
//   const result = textWords.map((el) => {
//     if (vowels.includes(el)) {
//       return el.toUpperCase();
//     } else {
//       return el;
//     }
//   });
//   return result.join("");
// }

// const text = "добрый день";
// const resultText = toUpperCase(text);
// console.log(resultText);

// function getWord(el, vowels = `аеёиоуыэюя`) {
//   return el
//     .toLowerCase()
//     .split("")
//     .reduce((acc, cur) => (vowels.includes(cur) ? (acc += cur) : acc), "");
// }

// const vow = getWord(`ехал грека через реку`);
// console.log(vow.length);

//Разработать функцию поиска в массиве чисел состоящих из одинаковых цифр

const arr = [21, 3, 31, 38, 9, 6, 54, 53, 6, 4];

function findRepeatedNumber(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let strNum = num.toString();
    for (let j = 0; j < strNum.length; j++) {
      let digit = parseInt(strNum[j]);
      if (digit in result) {
        result[digit]++;
      } else {
        result[digit] = 1;
      }
    }
  }
  return arr.filter((num) => {
    let strNum = num.toString();
    for (let j = 0; j < strNum.length; j++) {
      let digit = parseInt(strNum[j]);
      if (result[digit] > 1) {
        return true;
      }
    }
    return false;
  });
}

console.log(findRepeatedNumber(arr));
