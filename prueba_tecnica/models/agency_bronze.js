const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AgencyBronze = sequelize.define(
    'AgencyBronze',
    {
      agency_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      agency_name: DataTypes.STRING,
      agency_url: DataTypes.STRING,
      agency_timezone: DataTypes.STRING,
      agency_lang: DataTypes.STRING,
      agency_phone: DataTypes.STRING,
      agency_fare_url: DataTypes.STRING,
      agency_email: DataTypes.STRING,
    },
    {
      tableName: 'agency_bronze',
      schema: 'estatico',
      timestamps: false,
    }
  );

  return AgencyBronze;
};
