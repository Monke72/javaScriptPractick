// const user = {
//   name: "Aleks",
//   age: 28,
//   isDeveloper: true,
// };
// for (let key in user) {
//   console.log(key); //перебрали свойства
//   console.log(user[key]); //перебрали значения свойства
// }

const nums = {
  name: "aleks",
  2: "too",
  1: "one",
  3: "three",
  age: 28,
};

for (let num in nums) {
  console.log(nums[num]);
}
