const person = {
  name: "max",
  age: 20,
  address: {
    country: "Russian",
    city: "Moskow",
  },
};

const {
  name: firstName = "no name",
  age,
  car = "No car",
  address: { city, country },
} = person; //для car задали дефолтное значение
console.log(firstName, age, car, city, country);
//переименовали name

const { name, ...other } = person;
console.log(name, other);

function logPerson({ name, age }) {
  console.log(name + " " + age);
}
logPerson(person);
