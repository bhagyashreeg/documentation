function Recipe() {
    this.ingredients = [];
  }
   Recipe.prototype.addIngredient = function (ingredient) {
     this.ingredients.push(ingredient);
     return this; // this makes chaining possible
   }
  
   Recipe.prototype.getIngredients = function () {
     if (!this.ingredients.length) {
       console.log('There is no ingredient in this recipe');
     } else {
       console.log(this.ingredients.toString());
     }
   }
  
   var recipeObj = new Recipe();
  
   recipeObj
   .addIngredient('salt')
   .addIngredient('pepper')
   .addIngredient('maggi')
   .getIngredients()