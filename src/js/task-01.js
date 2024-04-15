// Pobranie listy kategorii
const categoriesList = document.getElementById("categories");

// Pobranie wszystkich elementów kategorii
const categories = categoriesList.querySelectorAll(".item");

// Liczenie liczby kategorii
console.log("Number of categories:", categories.length);

// Dla każdej kategorii
categories.forEach((category) => {
  // Pobranie tytułu kategorii
  const categoryTitle = category.querySelector("h2").textContent;

  // Pobranie liczby elementów w kategorii
  const categoryElements = category.querySelectorAll("li").length;

  // Wyświetlenie tytułu i liczby elementów w kategorii
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
});
