const { Router } = require('express');
const { loginRoute } = require('./login/login.routes');
const { cadastroRoute } = require('./cadastro/register.routes');
const { productsCustomerRoute } = require('./cliente/products.customer.routes');
const { userRoute } = require('./users/user.routes');
const { admRoute } = require('./adm/adm.routes');
const orderedsRoute = require('./pedidos/pedidos.routes');

const route = Router();

route.use(loginRoute);

route.use(cadastroRoute);
route.use(productsCustomerRoute);
route.use(userRoute);
route.use(admRoute);
route.use(orderedsRoute);

module.exports = {
  route,
};
