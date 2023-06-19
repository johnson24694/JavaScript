const Note = require('../models/note.model');

module.exports.createNote = (req, res) => {
    Note.create(req.body) 
        .then((newNote) => {
            res.json({ newNote });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

module.exports.getAllNotes = (req, res) => {
    Note.find({})
        .then(allNotes => {
            console.log(allNotes);
            res.json(allNotes);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getOneNoteById = (req, res) => {
    Note.findOne({_id:req.params.id})
        .then(note => res.json(note))
        .catch(err => res.json(err));
}

module.exports.updateNote = (req, res) => {
    Note.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedNote => res.json(updatedNote))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteNote = (req, res) => {
    Note.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}