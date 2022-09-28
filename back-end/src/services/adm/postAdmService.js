const md5 = require('md5');
const { User } = require('../../database/models');
const { CustomError } = require('../../helpers/error/custom.error');
// const { verifyToken } = require('../../helpers/token/verifyToken');

const postAdmService = async (user) => {
  const { name, email, password, role } = user;

  const userExistsEmail = await User.findOne({ where: { email } });

  if (userExistsEmail) throw new CustomError(409, 'User already exists');

  const hashPassword = md5(password).toString();

  const newUser = { name, email, password: hashPassword, role };

  await User.create(newUser);

  const userCreateNow = await User.findOne({ where: { email } });

  const userRender = {
    id: userCreateNow.id,
    name: userCreateNow.name,
    email: userCreateNow.email,
    password: userCreateNow.password,
    role: userCreateNow.role,
  };

  const userComplete = { ...userRender }; return userComplete;
};

module.exports = {
  postAdmService,
};