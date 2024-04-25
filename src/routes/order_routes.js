const { Router } = require('express');
const controller = require('../controllers/order_controller');

const router = Router();

router.get('/:userId', controller.getOrders);
router.get('/:userId/:orderId', controller.getOrderById);
router.get('/:userId/:orderId/products', controller.getOrderProducts);

module.exports = router;