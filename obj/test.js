const user = {
  name: "Aleks",
  age: 28,
};

// console.log(user.addres?.city); //проверка на то есть ли этот элемент в обьекте , если его нет то мы не вызовем оштбки
// console.log(user?.age);

const guest1 = {
  name: "vasya",
  age: 30,
  orderInfo: {
    roomType: 2,
    stayDates: {
      from: "13.01.2022",
      to: "21.04.2022",
    },
  },
};
const guest2 = {
  name: "katya",
  age: 23,
};

const logGuestInfo = (guest) => {
  console.log(`
  Имя : ${guest.name}
  Возраст : ${guest.age}
  Дата выезда ${guest?.orderInfo?.stayDates?.to ?? "Не указана"} 
  `); //Добавили проверки на то есть ли вообще такие элементы в обьекте
};

logGuestInfo(guest1);
logGuestInfo(guest2);
