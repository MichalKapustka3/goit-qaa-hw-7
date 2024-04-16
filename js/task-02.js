const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobranie listy składników
const ingredientsList = document.getElementById("ingredients");

// Utworzenie elementów <li> dla każdego składnika
const liElements = ingredients.map((ingredient) => {
  // Utworzenie nowego elementu <li>
  const li = document.createElement("li");
  // Ustawienie zawartości tekstowej na nazwę składnika
  li.textContent = ingredient;
  // Dodanie klasy "item" do elementu <li>
  li.classList.add("item");
  // Zwrócenie utworzonego elementu <li>
  return li;
});

// Wstawienie wszystkich elementów <li> do listy ul#ingredients
ingredientsList.append(...liElements);
