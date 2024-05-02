async function f1() {
  const res = await fetch("./test.php?d=1"); //await заставляет ждать выполнения fetch
  return res.text;
}
async function f2() {
  const res = await fetch("./test.php?d=1");
  return res.text;
}

async function f3() {
  const res = await fetch("./test.php?d=1");
  return res.text;
}

async function go() {
  let a = await f1();
  console.log(a);
  let b = await f2();
  console.log(b);
  let c = await f1();
  console.log(c);
}

go();
