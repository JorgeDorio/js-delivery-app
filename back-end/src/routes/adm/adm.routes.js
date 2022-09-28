const { Router } = require('express');
const { validationRegister } = require('../../middlewares/cadastro/validationRegister');
const { 
  postAdmController,
} = require('../../controllers/adm/postAdmController');
const { verifyToken } = require('../../helpers/token/verifyToken');

const admRoute = Router();

admRoute.post('/admin/manage', verifyToken, validationRegister, postAdmController);

module.exports = {
  admRoute,
};