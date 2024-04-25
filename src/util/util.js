const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('dashboard');
  }
  next();
};

const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('login');
};

module.exports = {
  checkAuthenticated,
  checkNotAuthenticated
};