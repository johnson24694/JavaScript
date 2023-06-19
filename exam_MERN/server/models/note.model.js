const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { type: String,
            required: [true, "You must enter in a note title."],
            minlength: [3, "Note title must be at least 3 characters."]
        },
    description: { type: String,
        required: [true, "You must enter in a note description."],
        minlength: [3, "Note body must be at least 3 characters."],
        maxlength: [256, "Body must contain max of 255 characters."]
    },
   },
{timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);