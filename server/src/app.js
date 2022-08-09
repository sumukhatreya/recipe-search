const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello!',
  });
});

module.exports = app;
