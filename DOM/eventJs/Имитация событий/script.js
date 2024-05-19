const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
// btn2.ondblclick = f2;

function f2() {
  console.group("func 2");
  console.log("func 22");
  console.log(this);
  console.groupEnd();
}

const dblEvent = new MouseEvent("dblclick");

// btn2.dispatchEvent(dblEvent);

// btn3.onmousemove = f3;
function f3() {
  console.group("func 3");
  console.log("func 33");
  console.log(this);
  console.groupEnd();
}

const enterEvent = new MouseEvent("mousemove");
btn3.dispatchEvent(enterEvent);

input.onkeydown = f5;

function f5(event) {
  console.group("func 3");
  console.log("func 33");
  console.log(event.key);
  console.log(event.shiftKey);
  console.groupEnd();
}

const key1 = new KeyboardEvent("keydown", {
  //имиторовали нажатие z
  key: "z",
  shiftKey: true,
});
input.dispatchEvent(key1);

input2.oninput = f6;
function f6(event) {
  console.group("func 3");
  console.log("func 33");
  console.log(this.value);
  console.groupEnd();
}

const input2Event = new Event("input");
input2.value = "z2";
input2.dispatchEvent(input2Event);
