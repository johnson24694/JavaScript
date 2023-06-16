const Recipe = require('../models/recipe.model');

module.exports.createRecipe = (req, res) => {
    Recipe.create(req.body) 
        .then((newRecipe) => {
            res.json({ newRecipe });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

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

module.exports.getOneRecipeById = (req, res) => {
    Recipe.findOne({_id:req.params.id})
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
}

module.exports.updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedRecipe => res.json(updatedRecipe))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteRecipe = (req, res) => {
    Recipe.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}