const userRouter = require('express').Router();

const {
  getUser, updateProfile,
} = require('../controllers/users');

const {
  validateId, validateUpdateProfile,
} = require('../middlewares/validator');

userRouter.get('/users/me', getUser, validateId);
userRouter.patch('/users/me', updateProfile, validateUpdateProfile);

module.exports = userRouter;
