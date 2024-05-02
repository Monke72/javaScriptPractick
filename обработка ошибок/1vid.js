try {
  console.log(1);
  console.log(2);
  const user = {};
  console.log(user.name);
  if (!user.name.er) {
    throw new ReferenceError("Ошибка"); //создали свою ошибку с условием для перехода в Cetch
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  //код который в любом случа отработает
  console.log("i in funally");
}
console.log(4);
