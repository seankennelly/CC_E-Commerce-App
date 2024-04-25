const pool = require('../db/db');
const queries = require('../db/db_queries');

// To CARTS table
const getCartUserById = (req, res) => {
  const userId = parseInt(req.params.userId);
  pool.query(queries.getCartUserById, [userId], (error, results) => {
    if (error) throw error;
    if (results.rows.length === 0) {
      res.status(400).send('Cart empty')
    } else {
      res.status(200).json(results.rows);
    };
  })
};

const createCart = (req, res) => {
  const userId = parseInt(req.params.userId);
    pool.query(queries.createCart, [userId], (error, results) => {
      if (error) throw error;
      res.status(201).send('Cart created');
    }) 
};

// To CARTS_PRODUCTS table
const addProductToCart = (req, res) => {
  const cartId = parseInt(req.body.cartId);
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity);
  pool.query(queries.addProductToCart, [cartId, productId, quantity], (error, results) => {
    if (error) throw error;
    res.status(201).send('Product added to cart');
  })
};

const removeProductFromCart = (req, res) => {
  const cartId = parseInt(req.body.cartId);
  const productId = parseInt(req.body.productId);
  pool.query(queries.removeProductFromCart, [cartId, productId], (error, results) => {
    if (error) throw error;
    res.status(204).send('Product deleted from cart');
  })
};

const updateProductQuantity = (req, res) => {
  const cartId = parseInt(req.body.cartId);
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity);
  pool.query(queries.updateProductQuantity, [cartId, productId, quantity], (error, results) => {
    if (error) throw error;
    res.status(200).send('Product quantity updated');
  })
};


module.exports = {
  getCartUserById,
  createCart,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity
};

/*
router.delete('/:userid', controller.deleteCart);
*/