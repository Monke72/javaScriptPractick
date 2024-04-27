function cs2() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}

// функция = код функции + доступные данные

let d = cs2(); // d - функция

d();
d();
d();
