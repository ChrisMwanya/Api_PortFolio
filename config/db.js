/* eslint-disable no-undef */
import mysql from "mysql";
// eslint-disable-next-line no-undef
require(dotenv).config();

module.exports = mysql.createConnection({
  host: process.env.host_db || "localhost",
  user: process.env.user_db || "root",
  password: process.env.password_db || "password",
  database: process.env.database_db || "portfolio",
});
