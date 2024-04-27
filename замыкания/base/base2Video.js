function createFn() {
  const massege = "hello world";

  function greeting() {
    console.log(massege);
  }
  return greeting;
}

const helloWorld = createFn();
helloWorld();
