const { Router } = require('express');
const { validationRegister } = require('../../middlewares/cadastro/validationRegister');
const { 
  postRegisterController,
} = require('../../controllers/cadastro/postRegisterController');

const cadastroRoute = Router();

cadastroRoute.post('/register', validationRegister, postRegisterController);

module.exports = {
  cadastroRoute,
};
