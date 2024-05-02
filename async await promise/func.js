const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => {
//   console.log("after 2 sec");
// });
// sleep(3000).then(() => {
//   console.log("after 3 sec");
// });

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
}); //Мы прождали отработку обоих промисов перед тем как заупстить выполнение

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
}); //Отрабатыет после выполнения первого промиса , для опредения какой из промисов был выполнен первым
