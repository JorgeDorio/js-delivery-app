const { Router } = require('express');
const { validationLogin } = require('../../middlewares/login/validationLogin');
const { loginUserController } = require('../../controllers/login/postLoginController');

const loginRoute = Router();

loginRoute.post('/', validationLogin, loginUserController);

module.exports = {
  loginRoute,
};
