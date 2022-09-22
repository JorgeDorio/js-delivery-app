const { Router } = require('express');
const { loginRoute } = require('./login/login.routes');
const orderedsRoute = require('./pedidos/pedidos.routes')
// const { cadastroRoute } = require('./cadastro/register.routes');

const route = Router();

route.use(loginRoute);
route.use(orderedsRoute);
// route.use(cadastroRoute);

module.exports = {
  route,
};
