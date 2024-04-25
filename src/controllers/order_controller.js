const pool = require('../db/db');
const queries = require('../db/db_queries');

const getOrders = (req, res) => {
  const userId = parseInt(req.params.userId);
  pool.query(queries.getOrders, [userId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows)
  })
}
  
const getOrderById = (req, res) => {
  const userId = parseInt(req.params.userId);
  const orderId = parseInt(req.params.orderId);
  pool.query(queries.getOrderById, [userId, orderId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const getOrderProducts = (req, res) => {
  const orderId = req.params.orderId;
  pool.query(getOrderProducts, [orderId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

module.exports = {
  getOrders,
  getOrderById,
  getOrderProducts
};