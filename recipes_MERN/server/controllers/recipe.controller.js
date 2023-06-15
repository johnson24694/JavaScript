const Recipe = require('../models/recipe.model');

module.exports.createRecipe = (req, res) => {
    Recipe.create(req.body) 
        .then(newRecipe => res.json(newRecipe))
        .catch(err => res.json(err));
}

module.exports.getAllRecipes = (req, res) => {
    Recipe.find({})
        .then(allRecipes => {
            console.log(allRecipes);
            res.json(allRecipes);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getOneRecipeById = (request, response) => {
    Recipe.findOne({_id:request.params.id})
        .then(recipe => response.json(recipe))
        .catch(err => response.json(err));
}

module.exports.updateRecipe = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedRecipe => response.json(updatedRecipe))
        .catch(err => response.json(err))
}

module.exports.deleteRecipe = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}