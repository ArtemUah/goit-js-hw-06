let counterValue = 0;
const btnIncrement = document.querySelector('button[data-action="increment"]');
const clickOnButtonIncrement = btnIncrement.addEventListener(
  "click",
  (event) => {
    counterValue += 1;
    const spanEl = document.getElementById("value");
    spanEl.textContent = counterValue;
  }
);
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const clickOnButtonDecrement = btnDecrement.addEventListener(
  "click",
  (event) => {
    counterValue -= 1;
    const spanEl = document.getElementById("value");
    spanEl.textContent = counterValue;
  }
);
