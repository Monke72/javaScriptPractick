document.addEventListener("DOMContentLoaded", function () {
  const textArea = document.querySelector("textarea");
  const storage = localStorage.getItem("textarea") || "";
  const btnClear = document.querySelector(".clear");

  if (storage.length) {
    textArea.value = storage;
  }

  textArea.addEventListener("input", function ({ target }) {
    localStorage.setItem("textarea", target.value);
  });

  btnClear.addEventListener("mousedown", () => {
    localStorage.removeItem("textarea");
    textArea.value = "";
  });
});
