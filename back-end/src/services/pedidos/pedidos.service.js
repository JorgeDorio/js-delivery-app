const { Sale, SaleProduct } = require('../../database/models');

const create = async (body) => {
  const { products } = body;
  const result = await Sale.create(body);
  products.forEach(product => {
    product.sale_id = result.id
  });
  await SaleProduct.bulkCreate(products)
  return result;
};

const read = async () => {
  const result = await Sale.findAll();
  return result;
};

const readOne = async (id) => {
  const result = await Sale.findByPk(id);
  return result;
};

const update = async (body, id) => {
  const result = await Sale.update(body, { where: { id } });
  return result;
};

const updateStatus = async (status, id) => {
  let body = await readOne(id);
  body = body.dataValues;
  body.status = status;
  const result = await Sale.update(body, { where: { id } });
  return result;
};

const destroy = async (id) => {
  const result = await Sale.destroy({ where: { id } });
  return result;
};

module.exports = {
  create,
  read,
  readOne,
  update,
  updateStatus,
  destroy,
};
