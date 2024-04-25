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




I believe that the .env file, the dbConfig file are not being used! Try removing their code and see if everything still works.