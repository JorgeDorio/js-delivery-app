const jwt = require('jsonwebtoken');
const { CustomError } = require('../error/custom.error');

require('dotenv').config();

const keyJWT = require('fs').readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, keyJWT || 'secrets');
    return decoded;
  } catch (error) {
    throw new CustomError(401, 'Token must be a valid token');
  }
};

module.exports = {
  verifyToken,
};
