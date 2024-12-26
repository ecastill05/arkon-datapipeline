const axios = require('axios');

const graphqlEndpoint = 'http://graphql:4000'; // GraphQL server URL

const fetchGraphQL = async (query, variables = {}) => {
  try {
    const response = await axios.post(graphqlEndpoint, {
      query,
      variables,
    });
    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }
    return response.data.data;
  } catch (error) {
    console.error('GraphQL Query Error:', error.message);
    throw new Error('Failed to fetch data from GraphQL API');
  }
};

module.exports = fetchGraphQL;