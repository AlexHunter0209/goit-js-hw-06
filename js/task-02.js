const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = [];
const itemElem = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const listElem = document.createElement("li");
  listElem.textContent = ingredient;
  listElem.classList.add("item");
  listElements.push(listElem);
}
itemElem.append(...listElements);