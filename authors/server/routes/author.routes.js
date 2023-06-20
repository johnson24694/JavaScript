const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getOneAuthorById);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}