const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AlcaldiasBronze = sequelize.define(
    'AlcaldiasBronze',
    {
      alcaldia_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      alcaldia_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'alcaldias_bronze',
      schema: 'estatico',
      timestamps: false,
    }
  );

  return AlcaldiasBronze;
};