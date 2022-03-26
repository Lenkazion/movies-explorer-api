require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const rateLimiter = require('./middlewares/rate-limit');
const errorHandler = require('./middlewares/error');
const router = require('./routes/index');

const app = express();

const { PORT = 3000, NODE_ENV, MONGO_ADRESS } = process.env;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(helmet());
app.use(rateLimiter);

mongoose.connect(NODE_ENV === 'production' ? MONGO_ADRESS : 'mongodb://127.0.0.1:27017/moviesdb');

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `App listening on port ${PORT}`,
  );
});
