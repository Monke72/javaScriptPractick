const makeCounter = () => {
  let count = 0;
  return () => {
    return count++;
  };
};
const counter = makeCounter();
console.log(counter());
const counter2 = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());
