const form = document.getElementById("article-form");

form.addEventListener("submit", saveArticle);

async function saveArticle(event) {
  event.preventDefault();

  const myFormData = new FormData(form);
  const formDataObj = Object.fromEntries(myFormData); //переделали в обычный обьект
  console.log(formDataObj);

  const params = new URLSearchParams();
  for (const [key, value] of myFormData.entries()) {
    params.append(key, value);
  }
  const result = params.toString();
  console.log(result);

  for (el of myFormData) {
    console.log(el);
  } //Получили значения 1 - name элемента 2 - то что он содержит внутри

  const content = myFormData.get("content"); //Обратились по name элемента и получили value
  console.log(content);

  myFormData.set("author", "John Doe"); //Добавили
  myFormData.delete("content"); //удалили

  await fetch("https://vk.com/", {
    method: "POST",
    body: myFormData,
  }); //Отправили запрос с нашими данными на сервер
  //------Смотреть весь рузультат через сеть в браузере на вкладке fetch нажимая по элементу к которому обращались оставляя ссылку
}
