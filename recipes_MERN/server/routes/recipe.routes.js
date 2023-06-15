const RecipeController = require('../controllers/recipe.controller');

module.exports = (app) => {
    app.post('/api/recipe', RecipeController.createRecipe);
    app.get('/api/recipes', RecipeController.getAllRecipes);
    app.get('/api/recipe/:id', RecipeController.getOneRecipeById);
    // app.patch('/api/recipe/:id', RecipeController.editRecipe);
    // app.delete('/api/recipe/:id', RecipeController.deleteRecipe);
}
