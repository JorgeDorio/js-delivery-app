const { Router } = require('express');
const { loginRoute } = require('./login/login.routes');

const route = Router();

route.use(loginRoute);

module.exports = {
  route,
};
