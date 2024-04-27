const obj = {
  name: "artem",
  age: 26,
  job: "front",
};

const ent = [
  ["name", "Artem"],
  ["age", 26],
  ["job", "Front"],
];

const map = new Map(ent);

const mapObj = Object.fromEntries(map.entries());

const array = [...map];
console.log(mapObj);
