let arr = [-4124, 0, -2, 0, -1, -4, -5, 1, 2, 3, 4, 71, 0, 1313, 131];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    newArr.push(arr[i]);
  }
}

function sumArr() {
  let sum = 0;
  newArr.forEach((el) => {
    sum += el / newArr.length;
  });
  return sum;
}
console.log(sumArr());
