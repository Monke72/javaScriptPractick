function makeCounter(count) {
  return function () {
    return count++;
  };
}
let counter = makeCounter(0);
let counter2 = makeCounter(0);

alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2());
