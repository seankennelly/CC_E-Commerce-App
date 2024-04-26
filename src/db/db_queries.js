// Users
const checkEmailExists = 'SELECT * FROM users WHERE email = $1';
const registerUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, password';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const deleteUser = 'DELETE FROM users WHERE id = $1';
// Products
const getProducts = 'SELECT * FROM products';
const getProductById = 'SELECT * FROM products WHERE id = $1';
// Carts
const getCartUserById = 'SELECT * FROM carts WHERE user_id = $1';
const createCart = 'INSERT INTO carts (user_id) VALUES ($1)';
const addProductToCart = 'INSERT INTO carts_products (cart_id, product_id, quantity) VALUES ($1, $2, $3)';
const removeProductFromCart = 'DELETE FROM carts_products WHERE cart_id = $1 AND product_id = $2';
const updateProductQuantity = 'UPDATE carts_products SET quantity = $3 WHERE cart_id = $1 AND product_id = $2';
// Orders
const getUserOrders = 'SELECT * FROM orders WHERE user_id = $1';
const getOrderById = 'SELECT * FROM orders WHERE user_id = $1 AND id = $2';
const getOrderProducts = 'SELECT order_id, product_id, name FROM orders_products LEFT JOIN products ON orders_products.product_id = products.id LEFT JOIN orders ON orders_products.order_id = orders.id WHERE order_id = $1';



module.exports = {
  checkEmailExists,
  registerUser,
  getUserById,
  deleteUser,
  getProducts,
  getProductById,
  getCartUserById,
  createCart,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
  getUserOrders,
  getOrderById,
  getOrderProducts,
  getOrderProducts
};