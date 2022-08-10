const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();
const errorMiddlewares = require('./errorhandlers');

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());

app.get('/search', async (req, res, next) => {
  try {
    // console.log(req.query);
    let searchUrl = `q=${req.query.q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

    if (Object.keys(req.query).length > 1) {
      let dietFilter = '';
      for (let elem of req.query.diet) {
        dietFilter += `diet=${elem}&`;
      }
      dietFilter = dietFilter.slice(0, -1);
      searchUrl += `&ingr=${req.query.ingr}&${dietFilter}&calories=${req.query.calories}`;
      console.log('Search url', searchUrl);
    }

    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&${searchUrl}`
    );
    res.json(response.data.hits);
  } catch (err) {
    next(err);
  }
});

app.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data.recipe);
    res.json(response.data.recipe);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddlewares.notFound);
app.use(errorMiddlewares.errorHandler);

module.exports = app;
