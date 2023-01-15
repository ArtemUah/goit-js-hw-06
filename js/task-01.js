const itemsOfCategoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsOfCategoriesList.length}`);

itemsOfCategoriesList.forEach((element) => {
  const titleOfItem = element.querySelector("h2");
  console.log(`Category: ${titleOfItem.textContent}`);
  const elementsOfItems = element.querySelectorAll("li");
  console.log(`Elements: ${elementsOfItems.length}`);
});
