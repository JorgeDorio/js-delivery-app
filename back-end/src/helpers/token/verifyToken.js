const jwt = require('jsonwebtoken');
const { CustomError } = require('../error/custom.error');

require('dotenv').config();

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secrets');
    return decoded;
  } catch (error) {
    throw new CustomError(401, 'Token must be a valid token');
  }
};

module.exports = {
  verifyToken,
};
