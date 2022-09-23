const { postRegisterService } = require('../../services/cadastro/postRegisterService');

const postRegisterController = async (req, res) => {
  const user = req.body;
  const userCreate = await postRegisterService(user);
  return res.status(201).json(userCreate);
};

module.exports = {
  postRegisterController,
};
