/* eslint-disable no-undef */
const mysql = require("mysql");
// eslint-disable-next-line no-undef

module.exports = mysql.createConnection({
  host: process.env.host_db || "localhost",
  user: process.env.user_db || "root",
  password: process.env.password_db || "password",
  database: process.env.database_db || "portfolio",
});
