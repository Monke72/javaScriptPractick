const user = {};

user.name = "Александр";
user["is developer"] = true; //[] используются если внутри пробелы или символы

console.log(user);

user.name = "Максон"; //Изменили name
user.age = 35;

delete user.name;
console.log(user);
