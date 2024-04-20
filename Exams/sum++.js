for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 15 && arr[i] >= -15 && arr[i] != 0) {
    positiveN.push(arr[i]);
  } else if (arr[i] === 0) {
    negativeN.push(arr[i]);
  }
}
function count() {
  let sum = 0;
  positiveN.forEach((num) => {
    sum += num;
  });
  return sum;
}
console.log(count());
console.log(negativeN.length);
