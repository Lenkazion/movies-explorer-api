const movieRouter = require('express').Router();

const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

const {
  validateCreateMovie, validateDeleteMovie,
} = require('../middlewares/validator');

movieRouter.get('/movies', getMovies);
movieRouter.post('/movies', createMovie, validateCreateMovie);
movieRouter.delete('/movies/:id', deleteMovie, validateDeleteMovie);

module.exports = movieRouter;
