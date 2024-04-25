CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL 
);

CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  num_in_stock integer NOT NULL,
  price integer NOT NULL,
);

CREATE TABLE carts (
  id SERIAL NOT NULL PRIMARY KEY,
  user_id integer NOT NULL REFERENCES users(id)
);

CREATE TABLE carts_products (
  cart_id integer NOT NULL REFERENCES carts(id),
  product_id integer NOT NULL REFERENCES products(id),
  quantity integer NOT NULL,
  PRIMARY KEY (cart_id, product_id)
);

CREATE TABLE orders (
    id integer NOT NULL PRIMARY KEY,
    user_id integer NOT NULL REFERENCES users(id),
    status character varying NOT NULL,
    "time" timestamp without time zone NOT NULL,
    total_price money NOT NULL
);

CREATE TABLE orders_products (
  order_id integer NOT NULL REFERENCES orders(id),
  product_id integer NOT NULL REFERENCES products(id),
  quantity integer NOT NULL,
  price money NOT NULL,
  PRIMARY KEY (order_id, product_id)
);