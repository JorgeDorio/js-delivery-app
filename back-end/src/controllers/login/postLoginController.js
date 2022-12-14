const { loginUserService } = require('../../services/login/postLoginService');

const loginUserController = async (req, res) => {
  const user = req.body;
  const userPersonalite = await loginUserService(user);
  return res.status(200).json(userPersonalite);
};

module.exports = {
  loginUserController,
};
