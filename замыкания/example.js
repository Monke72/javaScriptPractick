//1Создайте функцию, которая принимает два числа и возвращает их сумму с использованием замыкания.
function sum() {
  return function (a, b) {
    return a + b;
  };
}

const sumToo = sum();
// console.log(sumToo(2, 4));

//2Напишите функцию, которая будет принимать строку и возвращать ее длину с использованием замыкания.

function str() {
  let length = 0;
  return function strLength(text) {
    length = text.length;
    return length;
  };
}

const lnStr = str();
// console.log(lnStr("any"));

//3 Создайте функцию, которая будет принимать массив и возвращать его первый элемент с использованием замыкания.

const arr = [1, 21, 2, 1, 31, 3, 1, 3];

function firstEl() {
  return function (arr) {
    if (!Array.isArray(arr) || !arr.length) {
      return "error";
    } else {
      return arr[0];
    }
  };
}

const firstConst = firstEl();

// console.log(firstConst(arr));

//4 Напишите функцию, которая будет принимать число и возвращать его квадратный корень с использованием замыкания.

function squareRoot() {
  let root = null;
  return function (num) {
    if (isFinite(num)) {
      root = Math.sqrt(num);
      return root;
    } else {
      return error;
    }
  };
}

const answer = squareRoot();
// console.log(answer(16));

//5 Создайте функцию, которая будет принимать строку и возвращать ее верхний регистал с использованием замыкания.

const arrWord = "any";

function upWords() {
  any = undefined;
  return function (arr) {
    any = arr.toUpperCase();
    return any;
  };
}

const some = upWords();
console.log(some(arrWord));

//6 пример проверки имени пользователя и пароля

// function chekCred() {
//   const login = "test";
//   const password = "somePassword";

//   return {
//     chekLogin(value) {
//       return login === value;
//     },
//     checkPassword(value) {
//       return password === value;
//     },
//   };
// }

// const chek = chekCred();

// console.log(chek.checkPassword("test"));
// console.log(chek.chekLogin("test"));

function checkUser() {
  const login = any;
  const password = "212";

  return {
    chekLogin(value) {
      return login === value;
    },
    chekPassword(value) {
      return Number(password) === value;
    },
  };
}
const check = checkUser();

const logM = check.chekLogin(any);
const passM = check.chekPassword(2120);

if (logM && passM) {
  console.log("Разрешено");
} else {
  console.log("неверный пароль или логин");
}

//7
function math() {
  function el(val) {
    console.log(val);
  }

  function sum(num1 = 0, num2 = 0) {
    el(num1 + num2);
  }
  function multi(num1 = 0, num2 = 0) {
    el(num1 * num2);
  }

  return {
    sum: sum,
    multi: multi,
  };
}

const math2 = math();

math2.sum(2, 212);
math2.multi(2, 11);
