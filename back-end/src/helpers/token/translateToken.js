const jwt = require('jsonwebtoken');
const keyJWT = require('fs').readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

require('dotenv').config();

const translateToken = (token) => {
    const decoded = jwt.verify(token, keyJWT || 'secrets');
    return decoded;
};

module.exports = {
    translateToken,
};
