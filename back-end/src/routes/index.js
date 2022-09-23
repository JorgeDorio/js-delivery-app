const { Router } = require('express');
const { loginRoute } = require('./login/login.routes');
const { cadastroRoute } = require('./cadastro/register.routes');

const route = Router();

route.use(loginRoute);
route.use(cadastroRoute);

module.exports = {
  route,
};
