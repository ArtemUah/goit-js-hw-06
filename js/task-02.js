const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.forEach((element) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = element;
  ingredientsItem.classList.add("item");
  const ulEl = document.getElementById("ingredients");
  ulEl.appendChild(ingredientsItem);
});
