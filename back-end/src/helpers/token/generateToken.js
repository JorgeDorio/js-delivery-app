const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET || 'secrets', { expiresIn: '1y' });
  return token;
};

module.exports = {
  generateToken,
};
