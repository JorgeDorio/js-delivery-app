const { Router } = require('express');
const controller = require('../../controllers/pedidos/pedidos.constroller')

const router = Router();

router.get('/pedidos', controller.getOrdereds);

module.exports = router;
