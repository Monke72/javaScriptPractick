const object = {
  fN: "ivan",
  lastName: "ivanov",
  address: {
    street: 2,
    city: "moscov",
  },
};

const json = JSON.stringify(object);
console.log(json);

const newJson = JSON.parse(json);
console.log(newJson);
