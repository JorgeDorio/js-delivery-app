require('express-async-errors');
const express = require('express');
const { User } = require('../database/models');
const globalError = require('../helpers/error/global.error');
const { route } = require('../routes/index');

console.log(User);

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/login', async (_req, res) => {
  const result = await User.findAll();
  return res.status(200).json(result);
});

app.use(route);

app.use(globalError.handle);

module.exports = app;
