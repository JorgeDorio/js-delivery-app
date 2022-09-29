const { Router } = require('express');
const { getAllUsersController } = require('../../controllers/users/getAllUsersController');

const userRoute = Router();

userRoute.get('/sellers', getAllUsersController);

module.exports = {
  userRoute,
};
