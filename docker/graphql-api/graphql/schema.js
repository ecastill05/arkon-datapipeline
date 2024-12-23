const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Agency {
    agency_id: Int!
    agency_name: String!
    agency_url: String
    agency_timezone: String
    agency_lang: String
    agency_phone: String
    agency_fare_url: String
    agency_email: String
  }

  type Query {
    agencies: [Agency]
    agency(agency_id: Int!): Agency
  }
`;

module.exports = typeDefs;