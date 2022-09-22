const service = require('../../services/pedidos/pedidos.service')

const getOrdereds = async (_req, res) => {
  const result = await service.getOrdereds();
  return res.status(200).json(result);
};

module.exports = {
  getOrdereds,
};
