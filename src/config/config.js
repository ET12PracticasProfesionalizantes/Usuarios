require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "usuarios",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "testing": {
    "username": process.env.MYSQLUSER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "port": process.env.MYSQLPORT,
    "host": process.env.MYSQLHOST,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}