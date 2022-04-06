const userRouter = require('express').Router();

const {
  getUser, updateProfile,
} = require('../controllers/users');

const {
  validateId, validateUpdateProfile,
} = require('../middlewares/validator');

userRouter.get('/users/me', validateId, getUser);
userRouter.patch('/users/me', validateUpdateProfile, updateProfile);

module.exports = userRouter;
