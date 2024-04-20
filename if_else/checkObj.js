const user1 = {
  name: "user1",
  age: 30,
};
const user2 = {
  name: "user1",
  age: 30,
};

// if (user1 === user2) {
//   //false
// } //мы не можем сравнивать по внутринностям массива , таким способом мы сравниваем ссылкы на массив а они в свою очередь всегда отличаются
if (user1.name === user2.name && user1.age === user2.age) {
  console.log("wow");
} else {
  console.log("wo");
}
