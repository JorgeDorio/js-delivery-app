const md5 = require('md5');
const { User } = require('../../database/models');
const { CustomError } = require('../../helpers/error/custom.error');
const { generateToken } = require('../../helpers/token/generateToken');

const postRegisterService = async (user) => {
  const { name, email, password } = user;
  const userExistsEmail = await User.findOne({ where: { email } });
  const userExistsName = await User.findOne({ where: { name } });

  if (userExistsEmail || userExistsName) throw new CustomError(409, 'User already exists');

  // if (!name || !email || !password) throw new CustomError(409, 'Nome, email, password required');

  const hashPassword = md5(password).toString();

  const newUser = { name, email, password: hashPassword };

  await User.create(newUser);

  const userCreateNow = await User.findOne({ where: { email } });

  const { role } = userCreateNow;

  const userRender = {
    id: userCreateNow.id,
    name: userCreateNow.name,
    email: userCreateNow.email,
    password: userCreateNow.password,
    role: userCreateNow.role,
  };

  const token = generateToken({ email, name, role });

  const userComplete = { ...userRender, token }; return userComplete;
};

module.exports = {
  postRegisterService,
};
