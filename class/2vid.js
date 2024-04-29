class MyClass {
  constructor(name) {
    this.name = name;
    this.isAdmin = true;
  }
  method1() {
    console.log("hello");
  }
  method2() {
    console.log("hello");
  }

  get printName() {
    return this.name;
  }
}

let user1 = new MyClass("vitaliy");
console.log(user1);
