const form = document.querySelector("#form");

function retrievFormValue(event) {
  event.preventDefault();

  const name = form.querySelector(`[name="name"]`),
    age = form.querySelector(`[name="age"]`),
    terms = form.querySelector(`[name="terms"]`),
    plan = form.querySelector(`[name="plan"]`);

  const values = {
    name: name.value,
    age: age.value,
    plan: plan.value,
    terms: terms.checked,
  };

  console.log("v1", values);
}

form.addEventListener("submit", retrievFormValue);
