const { CustomError } = require('../../helpers/error/custom.error');

const validationLogin = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError(400, 'Email and password is required');
  }

  next();
};

module.exports = {
  validationLogin,
};
