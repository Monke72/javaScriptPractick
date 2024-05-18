const any = document.querySelector(".any");

any.style.color = "red";

console.log(any.style.marginBottom);

any.style.cssText = `
margin-bottom:30px;
background-color:black;
color:white;
`;
//через cssText можно писать множество стилей

const elementStyle = getComputedStyle(any);
console.log(elementStyle.paddingTop);
//через getComputedStyle можно получить стили записанные в css , а не html

//стиль псевдоэлемента
const elBeforeDtyle = getComputedStyle(any, "::before");
console.log(elBeforeDtyle.background);
