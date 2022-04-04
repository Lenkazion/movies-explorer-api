const { celebrate, Joi, CelebrateError } = require('celebrate');
const { isURL } = require('validator');

const urlValidator = (value) => {
  if (!isURL(value)) {
    throw new CelebrateError(`${value} не является URL адресом.`);
  }
  return value;
};

module.exports.validateSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5).max(30),
  }),
});

module.exports.validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5).max(30),
  }),
});

module.exports.validateId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).hex(),
  }),
});

module.exports.validateUpdateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports.validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().regex(/[\wа-яё\s]/i).min(3),
    director: Joi.string().required().regex(/[\wа-яё\s]/i).min(3),
    duration: Joi.number().required().min(3),
    year: Joi.string().required().min(2).max(4),
    description: Joi.string().required().regex(/[\wа-я.:!?"«»;@%№()*#,ё\s]/i).min(3),
    image: Joi.string().required().custom(urlValidator),
    trailer: Joi.string().required().custom(urlValidator),
    thumbnail: Joi.string().required().custom(urlValidator),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().regex(/[а-я.:!?"«»;@%№()*#,ё\s]/i).min(3),
    nameEN: Joi.string().required().regex(/[\w.:!?"«»;@%№()*#,\s]/i).min(3),
  }),
});

module.exports.validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().alphanum().length(24)
      .hex(),
  }),
});
