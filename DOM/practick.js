const body = document.body;

//Замена текста внутри элемента с классом “myClass” на “Новый текст”.
const newClass = document.querySelector(".my__class");

newClass.innerText = "Новый текст";
body.append(newClass);

//Добавление слушателя события клика к элементу с идентификатором “buttonId”, который выводит сообщение в консоль
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log(`Вы кликнули по элементу ${btn.id}`);
});

//Изменение цвета фона элемента с идентификатором “elementId” на синий.
const elementId = document.querySelector(".elementId");
elementId.style.backgroundColor = "blue";

//Создание нового элемента списка (UL) и добавление двух новых пунктов (LI) с текстом “Пункт 1” и “Пункт 2”.
const list = document.createElement("ul");
const listELem = `
<li>Пункт 1</li>
<li>Пункт 2</li>
`;
body.append(list);
list.insertAdjacentHTML("afterbegin", listELem);

//Удаление последнего ребенка из элемента с классом “containerClass”.
const containerClass = document.querySelector(".containerClass");
containerClass.lastElementChild.remove();

//Получение значения атрибута href у всех ссылок на странице и вывод его в консоль.
const link = document.getElementsByTagName("a");

for (el of link) {
  console.log(el.href);
}

//Замена содержимого таблицы с идентификатором “tableId” на данные из массива данных.
const cars = document.querySelector("cars");
const carsList = [
  { brand: "Tesla", year: 2015, color: "Красный" },
  { brand: "Lexus", year: 2016, color: "Серебристый" },
  { brand: "Nissan", year: 2012, color: "Черный" },
];

function setCars(brand, year, color) {
  return `
  ${brand} ${year} ${color} 
  `;
}

const carsInner = carsList
  .map((el) => {
    return setCars(el.brand, el.year, el.color);
  })
  .join();

body.after(carsInner);


