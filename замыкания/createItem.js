function createIncrementir(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementir(1);

console.log(addOne(10));
