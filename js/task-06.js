const inputEl = document.getElementById("validation-input");
const dataLength = document.querySelector('input[data-length="6"]');
inputEl.addEventListener("blur", (event) => {
  inputEl.classList.add('valid', 'invalid');
  if (inputEl.value.length === parseInt(dataLength.dataset.length)) {
    inputEl.classList.replace('invalid', 'valid');
  } else {
    inputEl.classList.replace('valid', 'invalid');
  }
});
