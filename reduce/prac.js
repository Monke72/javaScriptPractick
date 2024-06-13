const info = [
  {
    name: "asa",
    age: 132,
  },
  {
    name: "amas",
    age: 332,
  },
  {
    name: "aaasa",
    age: 312,
  },
];

const onlyName = info.reduce((acc, name) => {
  acc.push(["name:", name.name, "age:", name.age]);
  return acc;
}, []);
// console.log(onlyName);

//Напишите функцию, которая принимает строку и возвращает новый массив, содержащий каждый символ строки в виде отдельного элемента, используя метод reduce.

const arr = "алыоа шавошпо шпошпоаш пшвопшо";

function callbackNewMass(str) {
  const newArr = str.split("").reduce((acc, el) => {
    acc.push(el);
    return acc;
  }, []);
  return newArr;
}

// function findNums(arr) {
//   let buff;
//   let isBreak;
//   for (let i of arr) {
//     i = String(i);
//     buff = i[0];
//     isBreak = false;
//     for (let j of i) {
//       if (buff !== j) {
//         isBreak = true;
//         break;
//       }
//     }
//     if (!isBreak) {
//       console.log(i);
//     }
//   }
// }

// findNums([21, 786, 87, 8, 5, 7, 57, 5, 2, 11]);

const arr3 = [21, 2, 12, 4, 5, 7, 86, 9, 79, 7, 35, 3, 42];

function findNUm(mass) {
  const result = {};
  mass.forEach((el) => {
    el = el.toString();
    el = el.split("");
    for (let i of el) {
      if (result[i]) {
        result[i]++;
      } else {
        result[i] = 1;
      }
    }
  });
  return mass.filter((el) => {
    el = el.toString();
    el = el.split("").some((i) => result[i] > 1);
    return el;
  });
}

console.log(findNUm(arr3));
