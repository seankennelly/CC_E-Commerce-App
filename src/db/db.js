const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce_api',
  password: 'password', /* IS THIS RIGHT? */
  port: 5432
});

module.exports = pool;