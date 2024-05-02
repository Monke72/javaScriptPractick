let a = 5;
a = a * 2;
try {
  document.querySelector(".test").innerHTML = a;
  console.log(a);
} catch (err) {
  alert("Ошибка");
  console.log("1");
} finally {
  console.log("Программа работает");
}

function t1() {
  console.log("hello");
}
t1();
