const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    default: `User${Math.floor(Math.random() * 100)}`,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Неправилная почта. Попробуйте снова.',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
