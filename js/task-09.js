function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnToChangeColor = document.querySelector(".change-color");
btnToChangeColor.addEventListener("click", (event) => {
  const backgroundEl = document.querySelector(".widget");
  backgroundEl.style.backgroundColor = `${getRandomHexColor()}`;
  const spanWithColor = document.querySelector(".color");
  spanWithColor.textContent = `${getRandomHexColor()}`;
});
