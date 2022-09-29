const md5 = require('md5');
const { User } = require('../../database/models');
const { CustomError } = require('../../helpers/error/custom.error');
const { generateToken } = require('../../helpers/token/generateToken');

const loginUserService = async (userObj) => {
  const { email, password } = userObj;
  const userLogin = await User.findOne({ where: { email } });
  if (userLogin == null) throw new CustomError(404, 'Not found');
  const hashPassword = md5(password);
  const passwordValid = userLogin.password === hashPassword;
  if (!passwordValid) throw new CustomError(404, 'Password not valid');
  const token = generateToken({ email, hashPassword, role: userLogin.role,
  });
  const userPersonalite = {
    id: userLogin.id,
    name: userLogin.name,
    email,
    role: userLogin.role,
    token,
  };
  return userPersonalite;
};

module.exports = {
  loginUserService,
};
