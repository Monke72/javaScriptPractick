function personInfo({ age, name = "aleks", isMaried }) {
  return `Его зовут ${name}, eму ${age} 
  женат ли он : ${isMaried}
  `;
}

const person = {
  age: 22,
  isMaried: "нет",
};

console.log(personInfo(person));
