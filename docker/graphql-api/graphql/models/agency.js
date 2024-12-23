const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assuming you have a sequelize instance

const Agency = sequelize.define('Agency', {
  agency_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  agency_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  agency_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  agency_timezone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  agency_lang: {
    type: DataTypes.STRING,
    allowNull: true
  },
  agency_phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  agency_fare_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  agency_email: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
    schema: 'estatico',      // Specify the schema
    tableName: 'agency_bronze',  // Specify the table name
    timestamps: false,        // Assuming no timestamps for simplicity
  });

module.exports = Agency;
