const JokeController = require('../controllers/jokes.controller');
 
module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:_id', JokeController.getJokeById);
    app.patch('/api/jokes/:_id', JokeController.updateJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteJoke);
};