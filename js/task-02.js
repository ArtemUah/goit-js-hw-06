const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((element) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = element;
  ingredientsItem.classList.add("item");
  return ingredientsItem;
});
const ulEl = document.getElementById("ingredients");
ulEl.append(...ingredientsList);
