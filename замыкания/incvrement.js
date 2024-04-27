function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  function log() {
    let massage = `Count is ${count}`;
    console.log(massage);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
log();
increment();
