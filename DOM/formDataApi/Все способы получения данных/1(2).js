const isChekBox = (type) => ["checkbox", "radio"].includes(type);

const form = document.querySelector("#form");

function retrievFormValue(event) {
  event.preventDefault();

  const fields = document.querySelectorAll("input , select , textarea");
  const values = {};
  fields.forEach((field) => {
    const { name, value, type, checked } = field;

    values[name] = isChekBox(type) ? checked : value;
  });
  console.log(values);
}

form.addEventListener("submit", retrievFormValue);
