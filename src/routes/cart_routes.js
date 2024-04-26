const { Router } = require('express');
const controller = require('../controllers/cart_controller');

const router = Router();

// To CARTS table
router.get('/:userId', controller.getCartUserById);
router.post('/:userId', controller.createCart);

// To CARTS_PRODIUCTS table
router.post('/', controller.addProductToCart);
router.delete('/', controller.removeProductFromCart);
router.put('/:userId/:productId', controller.updateProductQuantity);

module.exports = router;

// Removed params from cart_products post and delete, as request info comes from body not params
