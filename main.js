var letsCookButton = document.getElementById("letsCookButton")
var cookingPotSection = document.querySelector(".cookingpot")
var potImage = document.querySelector(".pot")
var sideButton = document.querySelector("#sideButton")
var mainDishButton = document.querySelector("#mainDishButton")
var dessertButton = document.querySelector("#dessertButton")
var entireMealButton = document.querySelector("#entireMealButton")

letsCookButton.addEventListener("click", generateRandomFood)
sideButton.addEventListener("click", checkSides)
mainDishButton.addEventListener("click", checkMainButton)
dessertButton.addEventListener("click", checkDessertButton)
entireMealButton.addEventListener("click", checkEntireMealButton)

function generateRandomFood() {
  potImage.classList.add("hidden")
  if (sideButton.checked === true) {
    cookingPotSection.innerHTML = `${sides[Math.floor(Math.random()*sides.length)]}`
  } else if (mainDishButton.checked === true) {
    cookingPotSection.innerHTML = `${mainDishes[Math.floor(Math.random()*mainDishes.length)]}`
  } else if (dessertButton.checked === true) {
    cookingPotSection.innerHTML = `${desserts[Math.floor(Math.random()*desserts.length)]}`
  }
}


function checkSides() {
  sideButton.checked = true
  mainDishButton.checked = false
  dessertButton.checked = false
  mainDishButton.checked = false
  entireMealButton.checked = false
}

function checkMainButton() {
  sideButton.checked = false
  mainDishButton.checked = false
  dessertButton.checked = false
  mainDishButton.checked = true
  entireMealButton.checked = false
}

function checkDessertButton() {
  sideButton.checked = false
  mainDishButton.checked = false
  dessertButton.checked = true
  mainDishButton.checked = false
  entireMealButton.checked = false
}

function checkEntireMealButton() {
  sideButton.checked = false
  mainDishButton.checked = false
  dessertButton.checked = false
  mainDishButton.checked = false
  entireMealButton.checked = true
}








var sides = ["Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]

var mainDishes = ["Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"]

var desserts = ["Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"]
