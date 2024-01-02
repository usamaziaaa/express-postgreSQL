const { Pool } = require("pg");
const config = require("./config");

const pool = new Pool({
  user: config.Database.User,
  host: config.Database.Host,
  database: config.Database.Database,
  password: config.Database.Password,
  port: config.Database.Port,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
