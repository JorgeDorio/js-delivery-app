const { Router } = require('express');
const controller = require('../../controllers/pedidos/pedidos.constroller');
const roleValidation = require('../../middlewares/role/role.validation');

const router = Router();

router.get('/c/:id', controller.readByCustomer);
router.delete('/:id', controller.destroy);
router.patch('/:id', controller.updateStatus);
router.put('/:id', controller.update);
router.get('/:id', controller.readOne);
router.get('/', roleValidation.isSeller, controller.read);
router.post('/', controller.create);

module.exports = router;
