console.log("request data...");

// setTimeout(() => {
//   console.log("preparing data");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.mod = true;
//     console.log("data received", backendData);
//   }, 1000);
// }, 1000);

const p = new Promise(function (resolve, reject) {
  setTimeout(
    () => {
      console.log("preparing data");
      const backendData = {
        server: "aws",
        port: 2000,
        status: "working",
      };
      resolve(backendData); //завершили выполнение промиса
    },

    1000
  );
});

p.then((data) => {
  // console.log("promise resolve", data); //Получили data из resolve передав его в then
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.mod = true;
      reject(data);
    }, 1000);
  });
})
  .then((clientData) => {
    console.log("data recevied", clientData);
    clientData.fromPromice = true;
    return clientData;
  })
  .then((data) => {
    console.log("mod", data);
  })
  .catch((err) => console.error("Error", err))
  .finally(() => {
    console.log("finally");
  });
