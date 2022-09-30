const service = require('../../services/pedidos/pedidos.service');

const create = async (req, res) => {
  const { body } = req;
  const result = await service.create(body);
  return res.status(201).json(result);
};

const readByCustomer = async (req, res) => {
  const { id } = req.params;
  const result = await service.readCustomer(id);
  return res.status(200).json(result);
};

const read = async (_req, res) => {
  const result = await service.read();
  return res.status(200).json(result);
};

const readOne = async (req, res) => {
  const { id } = req.params;
  const result = await service.readOne(id);
  return res.status(200).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const result = await service.update(body, id);
  return res.status(200).json(result);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await service.updateStatus(status, id);
  return res.status(200).json(result);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const result = await service.destroy(id);
  return res.status(200).json(result);
};

module.exports = {
  create,
  read,
  readOne,
  update,
  updateStatus,
  destroy,
  readByCustomer,
};
