const obj1 = { name: "aleks" };

const obj2 = {
  age: 28,
  adress: {
    city: "Moscow",
  },
};

const obj3 = {
  age: 28,
  isDeveloper: true,
  adress: {
    zipcode: 121314,
  },
};

const user = { ...obj1, ...obj2, ...obj3 };
console.log(user);
