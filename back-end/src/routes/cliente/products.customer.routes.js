const { Router } = require('express');
const { 
  getAllProductsController,
} = require('../../controllers/cliente/produtos/getAllProductsController');

const productsCustomerRoute = Router();

productsCustomerRoute.get('/customer/products', getAllProductsController);

module.exports = {
  productsCustomerRoute,
};
