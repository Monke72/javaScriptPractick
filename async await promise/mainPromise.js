//Пример через коллбеки

// function fetchUserInfo(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "aleks" };
//     callback(data);
//   }, 1000);
// }

// function fetchUserGames(id, callback) {
//   setTimeout(() => {
//     const data = ["game1", "game2"];
//     callback(data);
//   }, 1000);
// }

// function run() {
//   fetchUserInfo((userInfo) => {
//     console.log(userInfo);

//     fetchUserGames(userInfo.id, (userGames) => {
//       console.log(userGames);
//     });
//   });
// }
// run();

//Пример через промисы

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "aleks" };
      reject("err1");
      // resolve(data); //Передаем дату внуть промиса
    }, 1000);
  });
}

function fetchUserGames(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["game1", "game2"];
      reject("err2");
      // resolve(data); //Передаем дату внутрь промиса
    }, 1000);
  });
}

function run() {
  fetchUserData()
    .then((userData) => {
      //Через then вытаскиваем то что передано в промис , в моем случае resolve(data);
      return fetchUserGames(userData.id); //Передали id из 1 функции в дргую и получилось так что 1 функция зависит от 2
    }) //вызовится лишь тогда когда у 2 функции будет вызван resolve
    .then((userGames) => {
      console.log(userGames);
    })
    .catch((message) => {
      console.log(message);
    })
    .finally(() => {
      console.log("Заверши анимации после выполнения запросов");
    });
}
run();
