const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String,
            required: [true, "You must enter in an author's name."],
            minlength: [2, "Author's name must be at least 2 characters."]
        },
   },
{timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);