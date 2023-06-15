const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: { type: String,
            required: [true, "You must enter in a recipe name."],
            minlength: [3, "Recipe name must be at least 3 characters."]
        },
    description: { type: String,
        required: [true, "You must enter in a recipe description."],
        minlength: [3, "Recipe description must be at least 3 characters."]
    },
    instructions: { type: String,
        required: [true, "You must enter in recipe instructions."],
        minlength: [3, "Recipe instructions must be at least 3 characters."]
    },
    cookTime: { type: Number,
        required: [true, "You must enter a cook time in minutes."],
        minlength: [3, "Recipe cook time must be at least 3 characters."]
    },  
   },
{timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);