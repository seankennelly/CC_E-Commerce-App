const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const pool = require('./src/db/db');
const queries = require('./src/db/db_queries');
const bcrypt = require('bcrypt');

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    pool.query(queries.checkEmailExists, [email], (error, results) => {
      if (error) throw error;
      console.log("User details:")
      console.log(results.rows);
      if (results.rows.length > 0) {
        const user = results.rows[0];
        bcrypt.compare(password, user.password, (error, isMatch) => {
          if (error) throw error;
          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password is not correct" });
          }
        })
      } else {
        return done(null, false, { message: "Email is not registered" });
      }
    })
  };

  passport.use(new LocalStrategy(
    {
    usernameField: "email",
    passwordField: "password"
    }, 
    authenticateUser
  ));
};

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) {
      return done(error); // Pass the error to the done callback
    }
    // Check if results are empty or null
    if (!results.rows || results.rows.length === 0) {
      return done(null, false); // User not found
    }
    // Return the user object
    return done(null, results.rows[0]);
  });
});

module.exports = initialize;