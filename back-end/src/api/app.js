require('express-async-errors');
const express = require('express');
const cors = require('cors');
const { User } = require('../database/models');
const globalError = require('../helpers/error/global.error');
const { route } = require('../routes/index');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/login', async (_req, res) => {
  const result = await User.findAll();
  return res.status(200).json(result);
});

app.use(route);

app.use(globalError.handle);

module.exports = app;
