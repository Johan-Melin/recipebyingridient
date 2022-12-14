let ingredientArea = document.getElementById("ingredient-area")
let recipeArea = document.getElementById("recipe-area")

const recipes = {
  "pancake": ["egg", "flour", "milk", "butter"],
  "scrambled eggs": ["egg"]
}

let ingridients = {};
for (const recipe in recipes) {
  recipes[recipe].reduce((obj, ing) => {
    obj[ing] = obj[ing]+1 || 1
    return obj
  }, ingridients)

  const newEl = document.createElement('div')
  newEl.innerHTML = recipe + " (" + recipes[recipe].length + ")"
  recipeArea.appendChild(newEl)
}

for (const ingridient in ingridients) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  ingredientArea.appendChild(checkbox)

  const newEl = document.createElement('div')
  newEl.innerHTML = ingridient + " (" + ingridients[ingridient] + ")"
  ingredientArea.appendChild(newEl)
}
