function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const btnToChangeColor = document.querySelector(".change-color");

btnToChangeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  const spanWithColor = document.querySelector(".color");
  spanWithColor.textContent = `${getRandomHexColor()}`;
});
