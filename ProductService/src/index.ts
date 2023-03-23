import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { resolvers } from "./graphql/resolvers/product";

import { expressMiddleware } from "@apollo/server/express4";
import { readFileSync } from "fs";
import express from "express";

const app = express();
const mongoose = require("mongoose");
const typeDefs = gql(
  readFileSync(`${__dirname}/graphql/types/product.graphql`).toString("utf-8")
);

import { DB_URI } from "../database-config";
import { createAmqpConnection } from "./connections/rabbitmq-connection";

require("dotenv").config();

const createDatabaseConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI);
    console.log("✅ Product Service: Connected to DB");
  } catch (error) {
    console.log("⛔", error);
  }
};

const startUserServiceServer = async () => {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });

  await createAmqpConnection();
  await createDatabaseConnection();

  await server.start();

  app.use(express.json());
  app.use(expressMiddleware(server));

  app.listen({ port: 4002 }, () => {
    console.log(`🚀 Server ready at http://localhost:4002/`);
  });
};

startUserServiceServer();
