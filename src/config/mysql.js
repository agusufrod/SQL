require('dotenv').config();
var Sequelize = require('sequelize');
const { MYSQLUSER, MYSQLPASSWORD, MYSQLHOST, MYSQLDATABASE, DB_DIALECT } = process.env;
var db = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
  dialect: DB_DIALECT,
  host: MYSQLHOST,
});

module.exports = db;
