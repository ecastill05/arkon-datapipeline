const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');  // Import the schema
const resolvers = require('./graphql/resolvers');  // Import the resolvers
const sequelize = require('./config/database');  // Assuming sequelize is configured in this file

const app = express();

async function startServer() {
    // Create the Apollo Server instance
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,  // Enable GraphQL introspection (useful for development)
      playground: true,     // Enable GraphQL playground (useful for development)
    });
  
    // Wait for the Apollo server to start before applying middleware
    await server.start();
  
    // Apply Apollo Server middleware to Express app
    server.applyMiddleware({ app });
  
    // Sync Sequelize models with the database
    await sequelize.sync();
  
    // Start the Express server
    app.listen({ port: 4000 }, () =>
      console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
    );
  }
  
  // Start the server
  startServer().catch(err => {
    console.error("Error starting the server:", err);
  });