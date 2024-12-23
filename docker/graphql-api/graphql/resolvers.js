const Agency = require('../models/agency');  // Import the Sequelize model

const resolvers = {
  Query: {
    // Resolver for the 'agencies' query
    agencies: async () => {
      try {
        // Fetch all agencies from the database
        return await Agency.findAll();
      } catch (error) {
        throw new Error("Error fetching agencies: " + error.message);
      }
    },

    // Resolver for the 'agency' query by ID
    agency: async (_, { agency_id }) => {
      try {
        // Fetch a single agency by its agency_id
        const agency = await Agency.findOne({ where: { agency_id } });
        if (!agency) {
          throw new Error("Agency not found");
        }
        return agency;
      } catch (error) {
        throw new Error("Error fetching agency: " + error.message);
      }
    }
  }
};

module.exports = resolvers;
