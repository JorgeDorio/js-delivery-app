const { postAdmService } = require('../../services/adm/postAdmService');

const postAdmController = async (req, res) => {
  const user = req.body;
  const userCreate = await postAdmService(user);
  return res.status(201).json(userCreate);
};

module.exports = {
  postAdmController,
};
