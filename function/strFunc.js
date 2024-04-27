const obj = {
  lastName: "ivanov",
  firstNames: ["Petr", "Ivan"],
  logFullNames1: function () {
    this.firstNames.forEach(function (name) {
      console.log(`${this.lastName} ${name}`);
    }, this); //передали this вторым аргементом
  },
  logFullNames2: function () {
    this.firstNames.forEach((name) => {
      console.log(`${this.lastName} ${name}`);
    });
  },
};

obj.logFullNames1();
obj.logFullNames2();
