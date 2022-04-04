const movieRouter = require('express').Router();

const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

const {
  validateCreateMovie, validateDeleteMovie,
} = require('../middlewares/validator');

movieRouter.get('/movies', getMovies);
movieRouter.post('/movies', validateCreateMovie, createMovie);
movieRouter.delete('/movies/:id', validateDeleteMovie, deleteMovie);

module.exports = movieRouter;
