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

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4002 },
    context: async ({ req }: { req: any }) => {
      const user = req.headers.user ? JSON.parse(req.headers.user) : null;

      return user;
    },
  });

  console.log(`🚀 Product Service: Server ready at ${url}`);
};

startUserServiceServer();
