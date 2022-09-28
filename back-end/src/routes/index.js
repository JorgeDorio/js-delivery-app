const { Router } = require('express');
const { loginRoute } = require('./login/login.routes');
const { cadastroRoute } = require('./cadastro/register.routes');
const { productsCustomerRoute } = require('./cliente/products.customer.routes');
const { admRoute } = require('./adm/adm.routes');

const route = Router();

route.use(loginRoute);
route.use(cadastroRoute);
route.use(productsCustomerRoute);
route.use(admRoute);

module.exports = {
  route,
};
