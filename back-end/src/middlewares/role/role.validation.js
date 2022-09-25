const { verifyToken } = require('../../helpers/token/verifyToken')

const isSeller = (req, res, next) => {
  const { token } = req.headers;
  const { role } = verifyToken(token);
  if (role !== 'seller') {
    return res.status(401).json({ message: 'Acesso negado.' })
  }
  next()
}

const isCustomer = (req, res, next) => {
  const token = req.headers;
  console.log(token);
  next()
}

const isAdm = (req, res, next) => {
  const token = req.headers;
  console.log(token);
  next()
}

module.exports = { isSeller }
