const router = require('express').Router();
const {
  login, createUser,
} = require('../controllers/users');

const {
  validateSignin, validateSignup,
} = require('../middlewares/validator');

const auth = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');

router.post('/signin', login, validateSignin);
router.post('/signup', createUser, validateSignup);

router.use(auth, userRouter);
router.use(auth, movieRouter);

module.exports = router;
