const user = {
  // city: "Moskow",
};

const { city: userCity = "no info" } = user; //Добвавление пременной а потом проверка , если она отсутвует то выводим аргумент полсе =

console.log(userCity);
