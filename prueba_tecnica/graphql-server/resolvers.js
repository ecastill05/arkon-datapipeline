const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/metrobus_db');

const CalendarBronze = require('./models/calendar_bronze')(sequelize);
const AgencyBronze = require('./models/agency_bronze')(sequelize);
const AlcaldiasBronze = require('./models/alcaldias_bronze')(sequelize);
const StopsSilver = require('./models/stops_silver')(sequelize);

const resolvers = {
    Query: {
        stops: async (_, { alcaldia }) => {
            return await StopsSilver.findAll({
                where: { closest_alcaldia: alcaldia },
                order: [['stop_name', 'ASC']],
            });
        },
        alcaldias: async () => {
            try {
              const alcaldias = await AlcaldiasBronze.findAll();
              if (!alcaldias) {
                throw new Error("No alcaldias found");
              }
              return alcaldias;
            } catch (error) {
              console.error("Error fetching alcaldias:", error);
              throw new Error("Failed to fetch alcaldias");
            }
        },
    },
};

module.exports = resolvers;