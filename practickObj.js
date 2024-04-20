//1
const car = {
  brand: "bmw",
  model: 550,
  year: 2016,
};
// console.log(car.brand);
//2
const student = {
  name: "aleks",
  age: 22,
  grades: 4.2,
};

student.grades = 3;
// console.log(student);

//3
function getTotalScore(stud) {
  return stud.grades;
}
// console.log(getTotalScore(student));

//4

const circle = {
  radius: 71,
  sCircle: function calculateArea() {
    return this.radius ** 2 * 3.14;
  },
};
// console.log(circle.sCircle());

//5

const book = {
  title: 21,
  autor: 11,
  pages: 411,
};

function pagesThreeHungredPlus(a) {
  if (a.pages > 300) {
    return true;
  } else {
    return false;
  }
}
console.log(pagesThreeHungredPlus(book));
