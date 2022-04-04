const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    minlength: 3,
    required: true,
  },
  director: {
    type: String,
    minlength: 3,
    required: true,
  },
  duration: {
    type: Number,
    minlength: 2,
    required: true,
  },
  year: {
    type: String,
    maxlength: 4,
    required: true,
  },
  description: {
    type: String,
    minlength: 3,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
      message: 'Ссылка не подходит.',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
      message: 'Ссылка не подходит.',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
      message: 'Ссылка не подходит.',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
    unique: true,
  },
  nameRU: {
    type: String,
    minlength: 3,
    required: true,
    validate: {
      validator(name) {
        return /[а-я.:!?"«»;@%№()*#,ё\s]/gi.test(name);
      },
    },
  },
  nameEN: {
    type: String,
    minlength: 3,
    required: true,
    validate: {
      validator(name) {
        return /[\w.:!?"«»;@%№()*#,\s]/gi.test(name);
      },
    },
  },
});

module.exports = mongoose.model('movie', movieSchema);
