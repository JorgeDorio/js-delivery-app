const { Router } = require('express');
const controller = require('../../controllers/pedidos/pedidos.constroller');
const paths = require('./paths');

const router = Router();

router.delete(paths.pedidosId, controller.destroy);
router.patch(paths.pedidosId, controller.updateStatus);
router.put(paths.pedidosId, controller.update);
router.get(paths.pedidosId, controller.readOne);
router.get(paths.pedidos, controller.read);
router.post(paths.pedidos, controller.create);

module.exports = router;
