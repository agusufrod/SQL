require('dotenv').config();
var Sequelize = require('sequelize');
const { MYSQLUSER, MYSQLPASSWORD, MYSQLHOST, MYSQLDATABASE, MYSQLPORT } = process.env;

var db = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
  dialect: 'mysql',
  host: MYSQLHOST,
  port: MYSQLPORT,
});

(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = db;
