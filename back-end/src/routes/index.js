const { Router } = require('express');
const { loginRoute } = require('./login/login.routes');
const { cadastroRoute } = require('./cadastro/register.routes');
const { productsCustomerRoute } = require('./cliente/products.customer.routes');
const { userRoute } = require('./users/user.routes');
const { admRoute } = require('./adm/adm.routes');
const orderedsRoute = require('./pedidos/pedidos.routes');

const route = Router();

route.use('/pedidos', orderedsRoute);
route.use('/login', loginRoute);
route.use('/register', cadastroRoute);
route.use('/customer/', productsCustomerRoute);
route.use('/users/', userRoute);
route.use('/admin/', admRoute);

module.exports = {
  route,
};
