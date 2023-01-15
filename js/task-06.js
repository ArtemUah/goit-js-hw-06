const inputEl = document.getElementById("validation-input");
const dataLength = document.querySelector('input[data-length="6"]');
inputEl.addEventListener("blur", (event) => {
  if (inputEl.value.length === parseInt(dataLength.dataset.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
