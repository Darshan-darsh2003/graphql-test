// index.js
require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const sequelize = require("./config/db"); // Import sequelize from db.js

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start(); // Start Apollo Server

  server.applyMiddleware({ app }); // Apply middleware after server start

  // Synchronize models with the database
  await sequelize.sync({ force: true }); // force: true will drop the table if it already exists and recreate it

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
