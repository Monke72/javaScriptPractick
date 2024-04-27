users = {
  user1: {
    name: "aleks",
    age: 32,
    isDev: true,
  },
  user2: {
    name: "alan",
    age: 11,
    isDev: false,
  },
  user3: {
    name: "alana",
    age: 21,
    isDev: true,
  },
};

const arrayOfAges = Object.values(users).map((user) => user.age);
console.log(Object.values(users).map((user) => user.age));
