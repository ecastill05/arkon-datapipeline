const { Sequelize } = require('sequelize');

// Setup PostgreSQL connection
const sequelize = new Sequelize('postgres://postgres:postgres@db:5432/metrobus_db', {
  dialect: 'postgres',
  logging: true, // Disable logging for cleaner output
});

module.exports = sequelize;
