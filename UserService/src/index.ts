import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { resolvers } from "./graphql/resolver";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
const mongoose = require("mongoose");
const typeDefs = gql(
  readFileSync("src/graphql/types/user.graphql").toString("utf-8")
);

import { DB_URI } from "../database-config";

require("dotenv").config();

const createDatabaseConnection = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("User Service: Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

const startUserServiceServer = async () => {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });

  await createDatabaseConnection();

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });

  console.log(`User Service: Server ready at ${url}`);
};

startUserServiceServer();
