console.log("start1");

console.log("start2");

function timeOut() {
  console.log("timeOut");
}

setTimeout(timeOut, 1000);
// setTimeout(() => {
//   timeOut();
// }, 1000);

console.log("end");

let count = 0;
const id2 = setInterval(() => {
  if (count === 5) {
    clearInterval(id2);
  }
  console.log("5");
  count++;
}, 1000);
