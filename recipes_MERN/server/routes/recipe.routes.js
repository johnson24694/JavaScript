const RecipeController = require('../controllers/recipe.controller');

module.exports = (app) => {
    app.post('/api/recipes', RecipeController.createRecipe);
    app.get('/api/recipes', RecipeController.getAllRecipes);
    app.get('/api/recipe/:id', RecipeController.getOneRecipeById);
    app.put('/api/recipe/:id', RecipeController.updateRecipe);
    app.delete('/api/recipe/:id', RecipeController.deleteRecipe);
}
