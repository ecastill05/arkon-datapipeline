const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CalendarBronze = sequelize.define(
    'CalendarBronze',
    {
      service_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      monday: DataTypes.BOOLEAN,
      tuesday: DataTypes.BOOLEAN,
      wednesday: DataTypes.BOOLEAN,
      thursday: DataTypes.BOOLEAN,
      friday: DataTypes.BOOLEAN,
      saturday: DataTypes.BOOLEAN,
      sunday: DataTypes.BOOLEAN,
      start_date: DataTypes.STRING,
      end_date: DataTypes.STRING,
    },
    {
      tableName: 'calendar_bronze',
      schema: 'estatico',
      timestamps: false,
    }
  );

  return CalendarBronze;
}