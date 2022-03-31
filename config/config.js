require('dotenv').config()

module.exports = {
  "development": {
    "username": process.enc.DB_USER,
    "password": process.enc.DB_PASSWORD,
    "database": process.enc.DB_DTABASE,
    "host": process.enc.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
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
