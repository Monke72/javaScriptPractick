//method:{
//GET - получаем данные
//Post - отправляем
//DELETE - удаляем данные с сервера
//PUT - Обновляет данные
//}

const newPost = {
  id: 8888,
  title: "lorem",
};
const test = JSON.stringify(newPost);

const any = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "Post", //Указываем какой мет запрашивает у браузера
  body: test,
})
  .then((data) => {
    if (data.status === 200) {
      return data.json();
    } else {
      console.log("err");
    }
  })
  .then((info) => {
    console.log(info);
  });
