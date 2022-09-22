const { loginUserService } = require('../../services/login/postLoginService');

const loginUserController = async (req, res) => {
  const user = req.body;
  const token = await loginUserService(user);
  return res.status(200).json({ token });
};

module.exports = {
  loginUserController,
};
