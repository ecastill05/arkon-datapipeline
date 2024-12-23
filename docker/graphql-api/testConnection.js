const sequelize = require('./config/database');  // Import the Sequelize instance

console.log('Database URL:', process.env.DATABASE_URL);  // Log to verify if it’s set correctly
console.log('process.env', process.env)
// Test database connection
async function testConnection() {
  try {
    // Try authenticating the connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    console.log('Database URL:', process.env.DATABASE_URL);
  }
}

testConnection();