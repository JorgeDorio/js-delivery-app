const md5 = require('md5');
const { user } = require('../../database/models/user');
const { CustomError } = require('../../helpers/error/custom.error');
const { generateToken } = require('../../helpers/token/generateToken');

const loginUserService = async (userObj) => {
  const { email, password } = userObj;

  const userLogin = await user.findOne({ where: { email } });

  if (!userLogin) {
    throw new CustomError(401, 'User not found');
  }

  const hashPassword = md5(password);

  const token = generateToken({
    email,
    hashPassword,
  });

  return token;
};

module.exports = {
  loginUserService,
};
