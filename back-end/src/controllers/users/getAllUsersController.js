const { getAllUsersService } = require('../../services/users/getAllUsersService');

const getAllUsersController = async (_req, res) => {
  const users = await getAllUsersService();
  return res.status(200).json(users);
};

module.exports = {
  getAllUsersController,
};
