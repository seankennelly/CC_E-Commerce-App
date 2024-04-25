const { Router } = require('express');
const controller = require('../controllers/cart_controller');

const router = Router();

// To CARTS table
router.get('/:userId', controller.getCartUserById);
router.post('/:userId', controller.createCart);

// To CARTS_PRODIUCTS table
router.post('/:userId/:productId', controller.addProductToCart);
router.delete('/:userId/:productId', controller.removeProductFromCart);
router.put('/:userId/:productId', controller.updateProductQuantity);

module.exports = router;