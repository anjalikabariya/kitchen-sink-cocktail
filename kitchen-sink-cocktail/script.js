const surpriseButton = document.getElementById('surpriseButton');

var randomDrinkImage = document.getElementById('randomDrinkImage');
var randomDrinkTitle = document.getElementById('randomDrinkTitle');
var randomDrinkListItem1 = document.getElementById('randomDrinkListItem1');
var randomDrinkListItem2 = document.getElementById('randomDrinkListItem2');
var randomDrinkListItem3 = document.getElementById('randomDrinkListItem3');
var randomDrinkListItem4 = document.getElementById('randomDrinkListItem4');
var randomDrinkRecipe = document.getElementById('randomDrinkRecipe');

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function grabMeADrink(){
  // event.preventDefault();
  var getRandomDrink = axios
  .get(apiUrl)
  .then(res => {
    let drinkImageURL = res.data.drinks[0].strDrinkThumb;
    let drinkTitle = res.data.drinks[0].strDrink;
    let drinkListItem1 = res.data.drinks[0].strIngredient1;
    let drinkListItem2 = res.data.drinks[0].strIngredient2;
    let drinkListItem3 = res.data.drinks[0].strIngredient3;
    let drinkListItem4 = res.data.drinks[0].strIngredient4;
    let drinkRecipe = res.data.drinks[0].strInstructions;

    randomDrinkImage.setAttribute('src', drinkImageURL);
    randomDrinkTitle.innerText = drinkTitle; 
    randomDrinkListItem1.innerText = drinkListItem1;
    randomDrinkListItem2.innerText = drinkListItem2;
    randomDrinkListItem3.innerText = drinkListItem3;
    randomDrinkListItem4.innerText = drinkListItem4;
    randomDrinkRecipe.innerText = drinkRecipe;
  })
  .catch(err => console.log(err));
}

grabMeADrink();

surpriseButton.addEventListener('submit', (event) => {
  event.preventDefault();
})