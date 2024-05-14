function fetchgames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = "dlskfjsfj";
      const gamesFromServer = [
        { id: 1, name: "pauk" },
        { id: 2, name: "mario" },
      ];

      if (Array.isArray(error)) {
        resolve(gamesFromServer);
      } else {
        reject("Что-то не так с данными"); //Если код выполнене с ошибкой вызываем reject
      }
    }, 2000);
  });
}

function renderLoading() {
  const body = document.querySelector("body");
  const loading = document.createElement("div");
  loading.id = "loading";
  loading.textContent = "loading";

  body.append(loading);
}

function renderGames(games) {
  const body = document.querySelector("body");

  const loading = document.querySelector("#loading");
  loading.remove();

  games.forEach((game) => {
    const gameElment = document.createElement("div");
    gameElment.innerText = `play : ${game.name}`;
    gameElment.className = "game__element";

    body.append(gameElment);
  });
}

renderLoading(); //запустили загрузку , которая удаляется после подгрузки с серваера , в моем случае после отсчета таймера

fetchgames()
  .then((games) => {
    //выполняется когда код выполнен успешно
    renderGames(games);
  })
  .catch((message) => {
    //выполняется когда код выполнен с ошибкой
    console.log(message);
  });
