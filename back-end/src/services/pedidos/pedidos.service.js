const { Sale, SaleProduct, Product, User } = require('../../database/models');

const create = async (body) => {
  const { products } = body;
  const result = await Sale.create(body);
  const a = products.map((product) => ({ ...product, saleId: result.id })); // eslint-disable-line no-param-reassign
  await SaleProduct.bulkCreate(a);
  return result;
};

const readCustomer = async (id) => {
  const result = await Sale.findAll(
    {
      attributes: [
        'id', 'userId', 'sellerId',
        'totalPrice', 'saleDate',
        'deliveryAddress', 'deliveryNumber',
      ],
      where: { userId: id },
    },
  );
  return result;
};

const read = async () => {
  const result = await Sale.findAll(
    {
      attributes: [
        'id', 'userId', 'sellerId',
        'totalPrice', 'saleDate',
        'deliveryAddress', 'deliveryNumber',
      ],
    },
  );
  return result;
};

const readOne = async (id) => {
  const sales = await Sale.findOne({
    attributes:
      ['id', 'totalPrice', 'deliveryAddress', 'deliveryNumber', 'saleDate', 'status', 'sellerId'],
    where: { id },
  });
  const seller = await User.findOne({ attributes: ['name'], where: { id: sales.sellerId } });
  const getItens = await SaleProduct.findAll({
    attributes: ['product_id', 'quantity'],
    where: { saleId: id },
  });
  const ids = getItens.map((item) => item.product_id);
  const getNames = await Product.findAll({ where: { id: ids } });
  getNames.forEach((item, index) => {
    item.dataValues.quantity = getItens[index].quantity; // eslint-disable-line no-param-reassign
  });
  sales.dataValues.sellerName = seller.name;
  sales.dataValues.products = getNames;
  return sales;
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
  readCustomer,
};
