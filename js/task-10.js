function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoXEl = document.getElementById("boxes");
let size = 20;

function createBoxes(amount) {
  let arr = [];
  for (let i = 1; i <= amount; i += 1) {
    arr.push(i);
  }
  console.log(arr);

  arr.forEach((element) => {
    const divEl = document.createElement("div");
    size += 10;
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.classList.add("created-boxes");
    divBoXEl.appendChild(divEl);
    divBoXEl.style.display = "flex";
    divBoXEl.style.flexDirection = "column";
    divBoXEl.style.gap = "10px";
    console.log(divBoXEl);
  });
  size = 20;
}

const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");

inputEl.addEventListener("input", (event) => {
  return inputEl.value;
});

btnCreateEl.addEventListener("click", (event) => {
  createBoxes(inputEl.value);
});

btnDestroyEl.addEventListener("click", (event) => {
  const boxesToDelete = document.querySelectorAll(".created-boxes");
  boxesToDelete.forEach((element) => {
    element.remove();
    
  });
});
