

function recipe(name, preparationTime, difficulty, instructions, ingredients) {
    this.name = name;
    this.preparationTime = preparationTime;
    this.difficulty = difficulty;
    this.instructions = instructions;
    this.ingredients = ingredients;
}

function ingredients(name, amount, measuringUnit) {
    this.name = name;
    this.amount = amount;
    this.measuringUnit = measuringUnit;
}


//Pancake
var pancakeMilk = new ingredients("milk", 0.75, "cup");
var pancakeWhiteVinegar = new ingredients("white vinegar", 2, "tablespoons");
var pancakeAllPurposeFlour = new ingredients("all-purpose flour", 1, "cup");
var pancakeWhiteSugar = new ingredients("white sugar", 2, "tablespoons");
var pancakeBakingPowder = new ingredients("baking powder", 1, "teaspoon");
var pancakeBakingSoda = new ingredients("baking soda", 0.5, "teaspoon");
var pancakeSalt = new ingredients("salt", 0.5, "teaspoon");
var pancakeEgg = new ingredients("egg", 1, "large");
var pancakeMeltedButter = new ingredients("melted butter", 2, "tablespoons");
var pancakeCookingSpray = new ingredients("cooking spray", 1, "can");

var pancakeIngredients = [pancakeMilk, pancakeWhiteVinegar, pancakeAllPurposeFlour, pancakeWhiteSugar, pancakeBakingPowder, pancakeBakingSoda, pancakeSalt, pancakeEgg, pancakeMeltedButter, pancakeCookingSpray];

var pancake = new recipe("Pancake", "25m", "Easy", 'Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".<br><br> Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.<br><br> Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.', pancakeIngredients);

//Strawberry Oatmeal Breakfast Smoothie
var SmoothieSoyMilk = new ingredients("soy milk", 1, "cup");
var SmoothieRolledOats = new ingredients("rolled oats", 0.5, "cup");
var SmoothieBanana = new ingredients("banana,", 1, "broken into chunks");
var SmoothieStrawberries = new ingredients("strawberries,", 14, "frozen");
var SmoothieVanillaExtract = new ingredients("vanilla extract", 0.5, "teaspoon");
var SmoothieWhiteSugar = new ingredients("white sugar", 1.5, "teaspoon");

var smoothieIngredients = [SmoothieSoyMilk, SmoothieRolledOats, SmoothieBanana, SmoothieStrawberries, SmoothieVanillaExtract, SmoothieWhiteSugar];

var smoothie = new recipe("Smoothie", "5m", "Easy", 'In a blender, combine soy milk, oats, banana and strawberries. Add vanilla and sugar if desired. Blend until smooth. Pour into glasses and serve.', smoothieIngredients);

//Baked Denver Omelet
var omeletButter = new ingredients("butter", 2, "tablespoons");
var omeletOnion = new ingredients("onion,", 0.5, "chopped");
var omeletPepper = new ingredients("green bell pepper,", 0.5, "chopped");
var omeletHam = new ingredients("chopped cooked ham", 1, "cup");
var omeletEggs = new ingredients("eggs", 8, "large");
var omeletMilk = new ingredients("milk", 0.25, "cup");
var omeletCheddar = new ingredients("shreded cheddar cheese", 0.5, "cup");
var omeletSalt = new ingredients("salt and pepper,", "", "to taste");

var omeletIngredients = [omeletButter, omeletOnion, omeletPepper, omeletHam, omeletEggs, omeletMilk, omeletCheddar, omeletSalt];

var omelet = new recipe("Omelet", "45m", "Medium", 'Preheat oven to 400 degrees F (200 degrees C). Grease a 10-inch round baking dish.<br><br> Melt butter in a large skillet over medium heat; cook and stir onion and bell pepper until softened, about 5 minutes. Stir in ham and continue cooking until heated through, 5 minutes more.<br><br> Beat eggs and milk in a large bowl. Stir in Cheddar cheese and ham mixture; season with salt and black pepper. Pour mixture into prepared baking dish.<br><br> Bake in preheated oven until eggs are browned and puffy, about 25 minutes. Serve warm.', omeletIngredients);

//Cheesy Quiche Crust
var quicheAllPurposeFlour = new ingredients("all-purpose flour", 0.75, "cup");
var quicheButter = new ingredients("cold butter, cut into small pieces", 6, "tablespoons");
var quicheCheddar = new ingredients("shredded cheddar cheese", 0.25, "cup");
var quicheWater = new ingredients("cold water", 5, "teaspoons");

var quicheIngredients = [quicheAllPurposeFlour, quicheButter, quicheCheddar, quicheWater];

var quiche = new recipe("Quiche", "20m", "Easy", 'Place flour in a large bowl. Sprinkle in the chopped butter; rub butter into the flour until it resembles bread crumbs. Stir in the grated cheese. Sprinkle water over the flour mixture, a teaspoon at a time, stirring lightly with a fork. Add just enough water to allow the dough form a ball and cleanly leave the sides of the bowl. Wrap the dough in plastic wrap, and refrigerate for at least 30 minutes.<br><br> Preheat an oven to 375 degrees F (190 degrees C). Roll out dough, and place in a 9 inch pie/quiche pan. Use a fork to prick holes over the bottom of the pastry.<br><br> Bake crust in preheated oven for 10 minutes before filling with quiche custard of your choice.', quicheIngredients);

//Baked Ham and Cheese Party Sandwiches
var hamButter = new ingredients("melted butter", 0.75, "cup");
var hamMustard = new ingredients("Dijon mustard", 1.5, "tablespoons");
var hamSauce = new ingredients("Worcestershire sauce", 1.5, "teaspoons");
var hamPoppy = new ingredients("poppy seed", 1.5, "teaspoons");
var hamOnion = new ingredients("dried minced onion", 1, "tablespoon");
var hamRolls = new ingredients("sandwich rolls", 24, "mini");
var hamSlices = new ingredients("thinly sliced cooked deli ham", 1, "pound");
var hamCheese = new ingredients("thinly sliced swiss cheese", 1, "pound");

var hamIngredients = [hamButter, hamMustard, hamSauce, hamPoppy, hamOnion, hamRolls, hamSlices, hamCheese];

var ham = new recipe("Ham & Cheese", "35m", "Easy", 'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x13-inch baking dish.<br><br> In a bowl, mix together butter, Dijon mustard, Worcestershire sauce, poppy seeds, and dried onion. Separate the tops from bottoms of the rolls, and place the bottom pieces into the prepared baking dish. Layer about half the ham onto the rolls. Arrange the Swiss cheese over the ham, and top with remaining ham slices in a layer. Place the tops of the rolls onto the sandwiches. Pour the mustard mixture evenly over the rolls.<br><br> Bake in the preheated oven until the rolls are lightly browned and the cheese has melted, about 20 minutes. Slice into individual rolls through the ham and cheese layers to serve.', hamIngredients);

//html element link
var recipeHtml = [document.getElementById("recipe1"),
document.getElementById("recipe2"),
document.getElementById("recipe3")];


var recipe21 = document.getElementById("recipe21");
var recipe22 = document.getElementById("recipe22");
var recipe23 = document.getElementById("recipe23");


//Recipe list
var mainArr = [pancake, smoothie, omelet, quiche, ham];

//Single ingredient
function ingred(ingredient) {
    return "<p>" + ingredient.amount + " " + ingredient.name + " " +  ingredient.measuringUnit + "</p>";
}

//Ingredient list
function ingredFunc(ingredients) {
    var str = "";
    for(var i=0; i<ingredients.length; i++) {
        str += ingred(ingredients[i]);
    }
    return str;
}

//Random number
function getRandomNumber(){
    var index = Math.round(Math.random() * 
                           (mainArr.length - 1));
    return index;
}

var randomNumberArr = [];

//innerHTML positioning function
function recipeNum() {
    var jsRecipe;
    var randomIndex;
    
    for (var i=0; i<3; i+=1) {
        randomIndex = getRandomNumber();
        // while randomNumber in list => need new
        while (randomNumberArr.indexOf(randomIndex) > -1) {
            randomIndex = getRandomNumber();
        }
        randomNumberArr.push(randomIndex);
        jsRecipe = mainArr[randomIndex];
        recipeFunc(recipeHtml[i], jsRecipe);
    }
}

recipeNum();

//innerHTML positioning
function recipeFunc(recipeHtml, recipeObj) {
    recipeHtml.childNodes[1].innerHTML = recipeObj.name;
    recipeHtml.childNodes[3].innerHTML = recipeObj.preparationTime;
    recipeHtml.childNodes[5].innerHTML = recipeObj.difficulty;
    recipeHtml.childNodes[7].innerHTML = recipeObj.instructions;
    recipeHtml.childNodes[9].innerHTML = ingredFunc(recipeObj.ingredients);
}

recipeFunc(recipe21, pancake);
recipeFunc(recipe22, omelet);
recipeFunc(recipe23, smoothie);

