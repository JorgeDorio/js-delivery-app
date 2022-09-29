const { translateToken } = require('../../helpers/token/translateToken');

const isSeller = (req, res, next) => {
  const { authorization } = req.headers;
  const { role } = translateToken(authorization);
  if (role !== 'seller') {
    return res.status(401).json({ message: 'Acesso negado.' });
  }
  next();
};

// const isCustomer = (req, res, next) => {
//   const token = req.headers;
//   console.log(token);
//   next();
// };

// const isAdm = (req, res, next) => {
//   const token = req.headers;
//   console.log(token);
//   next();
// };

module.exports = { isSeller };
