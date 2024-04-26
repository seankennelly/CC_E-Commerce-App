# E-Commerce REST API

## Technologies
- Postgres
- Express.js
- Node

## Dependencies
- Express
- Express Flash
- Passport
- Passport-local
- bcrypt
- pg
- ejs
- swagger-jsdoc
- swagger-ui-express

## Routes
| Route |  Method   |  Description   |
| :-----: | :---: | :---: |
| users/register |  POST  |  Allows users to register in the database  |
| users/login |  POST  |  Allows users to log in  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |
| Seconds |  301  |  283  |

## Resources
- Routing setup was learned from here: https://www.youtube.com/watch?v=DihOP19LQdg
  - Set up server.js, routes.js, controller.js, queries.js, db.js
  - Set up ecommerce_api database and tables
  - Endpoints were geared towards 'customers' postgres table
  - Some of this setup didn't work with user authentication, including anything that used 'customers' table
- User authentication was learned from here: https://www.youtube.com/watch?v=vxu1RrR0vbw
  - Established 'views' folder with HTML pages for user authentication
  - Set up 'users' table in Postgres
  - Set up user registration

## Testing
- Server side testing and database management was done with Postbird
- Requests were tested with Postman