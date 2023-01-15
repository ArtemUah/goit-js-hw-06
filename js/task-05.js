const inputEl = document.getElementById("name-input");
let outputData = "";

const inputData = inputEl.addEventListener("keydown", (event) => {
  const outputEl = document.getElementById("name-output");
  outputData += event.key;
  outputEl.textContent = outputData;
});
