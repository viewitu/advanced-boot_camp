/* global $ */
$(document).ready(function(){
    $.getJSON("api/recipe")
    .then(addRecipes);
        
});

function addIngredient(recipes){
    recipes.forEach(function(recipe){
      var newIngredient = $('<li class="task">' + recipe.name + '</li>');
      if(newIngredients.completed){newIngredient.addClass(true);}
      $('.list').append(newIngredient);
    });
}