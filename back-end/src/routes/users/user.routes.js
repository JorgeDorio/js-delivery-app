const { Router } = require('express');
const { getAllUsersController } = require('../../controllers/users/getAllUsersController');

const userRoute = Router();

userRoute.get('/users/sellers', getAllUsersController);

module.exports = {
  userRoute,
};
