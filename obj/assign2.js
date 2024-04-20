const obj1 = { name: "Aleks" };
const obj2 = { age: 28 };

// const user = Object.assign({}, obj1, obj2);
const user = { ...obj1, ...obj2 }; //Работают одинаково

console.log("user :", user);
