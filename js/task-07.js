const inputEl = document.getElementById("font-size-control");
const valueOfInputEl = inputEl.value;
console.log(typeof valueOfInputEl);
console.log(valueOfInputEl);
inputEl.addEventListener("input", (event) => {
  const textEl = document.getElementById("text");
  textEl.style.fontSize = `${inputEl.value}px`;
});
