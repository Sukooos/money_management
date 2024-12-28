const { Sequelize } = require("sequelize");
require("dotenv").config({ path: './.env' });

// Konfigurasi koneksi ke PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
