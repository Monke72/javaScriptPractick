const user = new Map();

user.set("name", "Dima");
user.set(() => {
  alert("hi");
}, "function");
user.set({ name: "Sergey" }, { value: 5 });

console.log(user.get("name"));
