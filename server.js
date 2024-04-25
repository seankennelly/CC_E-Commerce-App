// Imports
const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const initializePassport = require('./passportConfig');


// Middleware to render ejs files
app.set("view engine", "ejs");

// Cookies session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// User authentication with Passport
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Middleware to send messages with redirects
app.use(flash());

// Parses request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
const userRouter = require('./src/routes/user_routes');
const productRouter = require('./src/routes/product_routes');
const cartRouter = require('./src/routes/cart_routes');
const orderRouter = require('./src/routes/order_routes');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/orders', orderRouter);

// 
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});