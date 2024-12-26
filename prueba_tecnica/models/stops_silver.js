const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StopsSilver = sequelize.define(
    'StopsSilver',
    {
      stop_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      stop_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      closest_alcaldia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'stops_silver',
      schema: 'estatico',
      timestamps: false,
    }
  );

  return StopsSilver;
};