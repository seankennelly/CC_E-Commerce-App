const { Router } = require('express');
const controller = require('../controllers/user_controller');
const passport = require('passport');
const cartRouter = require('./cart_routes');
const util = require('../util/util');

const router = Router();


router.get('/', (req, res) => {
  res.render('index')
});

router.get('/register', util.checkAuthenticated, (req, res) => {
  res.render('register')
});
router.get('/login', util.checkAuthenticated, (req, res) => {
  res.render('login')
});
router.get('/dashboard', util.checkNotAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user.name });
});

router.use('/dashboard/cart', cartRouter);

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      // Handle error
      console.error('Error logging out:', err);
      return res.status(500).send('Error logging out');
    }
    req.flash('success_msg', 'You are now logged out');
    res.redirect('login');
  });
});
// Register new User
router.post('/register', (req, res) => {
  controller.registerUser(req, res, req.flash)
});
// Login user
router.post('/login', passport.authenticate('local', {
  successRedirect: 'dashboard',
  failureRedirect: 'login',
  failureFlash: true
}));
// Delete user
// Should this be router.delete? It works like this!
router.get('/deleteuser', controller.deleteUser);

module.exports = router;