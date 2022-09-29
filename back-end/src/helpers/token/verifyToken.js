const jwt = require('jsonwebtoken');
const keyJWT = require('fs').readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });
const { CustomError } = require('../error/custom.error');
// test

require('dotenv').config();

const verifyToken = (req, _res, next) => {
  const { authorization } = req.headers; 
  if (!authorization) {
    throw new CustomError(401, 'Token not found');
  }
  try {
    const decoded = jwt.verify(authorization, keyJWT || 'secrets');
    req.user = decoded;
    next();
  } catch (error) {
    throw new CustomError(401, 'Token must be a valid token');
  }
};

module.exports = {
  verifyToken,
};
