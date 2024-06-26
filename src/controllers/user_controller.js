const pool = require('../db/db');
const queries = require('../db/db_queries');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  console.log(name, email, password, password2);
  let errors = [];
  // Error handling
  if (!name || !email || !password || !password2) errors.push({message: 'Please fill in all fields'});
  if (password.length < 6) errors.push({ message: 'Password should be at least 6 characters'});
  if (password !== password2) errors.push({ message: 'Passwords do not match'});
  if (errors.length > 0) {
    res.render('register', { errors });
  } else {
    // Form validation has passed
    let hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    pool.query(queries.checkEmailExists, [email], (error, results) => {
      if (error) throw error;
      console.log(results.rows);
      if (results.rows.length) {
        errors.push({ message: "Email already in use"});
      res.render('register', {errors });
      } else {
        pool.query(queries.registerUser, [name, email, hashedPassword], (error, results) => {
          if (error) throw error;
          console.log(results.rows);
          req.flash('success_msg', 'You are now registered. Please log in.');
          res.redirect('login');
        })
      };
    })
  };
};

const deleteUser = (req, res) => {
  const id = parseInt(req.user.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send('User does not exist, could not delete');
    };

    pool.query(queries.deleteUser, [id], (error, results) => {
      if (error) throw error;
      // res.status(200).send("User deleted successfully");
      res.redirect('register');
    })
  })
};

module.exports = {
  registerUser,
  deleteUser
};
