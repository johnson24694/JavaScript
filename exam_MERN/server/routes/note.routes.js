const NoteController = require('../controllers/note.controller');

module.exports = (app) => {
    app.post('/api/notes', NoteController.createNote);
    app.get('/api/notes', NoteController.getAllNotes);
    app.get('/api/note/:id', NoteController.getOneNoteById);
    app.put('/api/note/:id', NoteController.updateNote);
    app.delete('/api/note/:id', NoteController.deleteNote);
}