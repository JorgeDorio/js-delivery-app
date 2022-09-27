const jwt = require('jsonwebtoken');

require('dotenv').config();

const keyJWT = require('fs').readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const generateToken = (payload) => {
  const token = jwt.sign(payload, keyJWT || 'secrets', { expiresIn: '1y' });
  return token;
};

module.exports = {
  generateToken,
};
