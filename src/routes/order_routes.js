const { Router } = require('express');
const controller = require('../controllers/order_controller');

const router = Router();

router.get('/products/:orderId', controller.getOrderProducts);
router.get('/:userId', controller.getUserOrders);
router.get('/:userId/:orderId', controller.getOrderById);

module.exports = router;