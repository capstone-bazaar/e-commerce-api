import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { resolvers } from "./graphql/resolvers/product";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
const mongoose = require("mongoose");
const typeDefs = gql(
  readFileSync(`${__dirname}/graphql/types/product.graphql`).toString("utf-8")
);

import { DB_URI } from "../database-config";

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

  await createDatabaseConnection();

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4002 },
  });

  console.log(`🚀 Product Service: Server ready at ${url}`);
};

startUserServiceServer();
