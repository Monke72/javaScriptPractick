function math(a, b, c) {
  return [a * b, b / c, a + b];
}
const [multi = 0, ...other] = math(21, 1, 2);

// console.log(other, multi);

const person = {
  name: " alex",
  age: 22,
  city: {
    cName: "samara",
    address: "Mira 22",
  },
};

// const {
//   name,
//   age,
//   city: { cName: town, address: add },
// } = person;

// console.log(town, add);

function logPerson({ name, age }) {
  console.log(name, age);
}
logPerson(person);
