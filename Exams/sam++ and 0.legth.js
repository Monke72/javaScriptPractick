const nums = [-1, 0, -2, 0, -3, -4, -5, 1, 2, 3, 4, 5, 0];
(positiveN = []), (negativeN = []);

for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= 1.5) {
    positiveN.push(nums[i]);
  } else if (nums[i] < 0) {
    negativeN.push(nums[i]);
  }
}

function count() {
  let sum = 0;
  negativeN.forEach((num) => {
    sum += num;
  });
  return sum;
}
console.log(positiveN.length);
console.log(count());
