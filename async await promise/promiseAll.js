function fetchVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["vid1", "vid2"];
      console.log("have data");
      resolve(data);
      // resolve(data); //Передаем дату внутрь промиса
    }, 1000);
  });
}

function fetchShorts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["shorts1", "shorts2"];
      console.log("have data 2");
      resolve(data);
      // resolve(data); //Передаем дату внутрь промиса
    }, 2000);
  });
}

function main() {
  console.log("loading");

  //Promise.all - как только видит ошибку в любом из промисов переходит в секцию catch
  //Promise.allSetted - дожидается выполнения всех промисов , не попадает в секцию catch при выполнении
  //Promise.race - возвращает первый  выолнившийся промис не смотря на то выполнился он с ошибкой или нет
  //Promise.any - возвращает первый успешно выолнившийся промис

  Promise.all([fetchShorts(), fetchVideo()]) //проходится по массиву промисов и выполняет их паралельно
    .then((data) => {
      console.log(data);
    });
}

main();
