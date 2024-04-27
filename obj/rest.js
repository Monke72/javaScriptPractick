const logUser = (user) => {
  const { name, age, city, ...otherInfo } = user;
  console.log(`
name: ${name}
age:${age}
city : ${city}
`);
  console.log(`more info`, otherInfo);
};
logUser({
  name: "aleks",
  age: 28,
  city: "moskow",
  company: "vk",
  job: "front",
});
