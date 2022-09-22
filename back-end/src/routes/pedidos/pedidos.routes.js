const { Router } = require('express');
const controller = require('../../controllers/pedidos/pedidos.constroller');

const router = Router();

router.delete('/pedidos/:id', controller.destroy);
router.patch('/pedidos/:id', controller.updateStatus);
router.put('/pedidos/:id', controller.update);
router.get('/pedidos/:id', controller.readOne);
router.get('/pedidos', controller.read);
router.post('/pedidos', controller.create);

module.exports = router;
