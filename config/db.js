/* eslint-disable no-undef */
const mysql = require("mysql");
// eslint-disable-next-line no-undef

module.exports = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB, 
});
