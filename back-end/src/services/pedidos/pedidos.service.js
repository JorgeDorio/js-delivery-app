const { Sale } = require('../../database/models')

const getOrdereds = async () => {
  const result = await Sale.findAll();
  return result;
};

module.exports = {
  getOrdereds
};
