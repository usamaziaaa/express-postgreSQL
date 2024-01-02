require("dotenv").config();

module.exports = {
  Port: process.env.APP_PORT,
  Database: {
    User: process.env.DB_USERNAME,
    Host: process.env.DB_HOST,
    Database: process.env.DB_DATABASE,
    Password: process.env.DB_PASSWORD,
    Port: process.env.DB_PORT,
  },
};
