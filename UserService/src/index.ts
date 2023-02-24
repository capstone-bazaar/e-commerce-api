require("dotenv").config();
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { resolvers } from "./graphql/resolvers/user";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { createAmqpConnection } from "./connections/rabbitmq-connection";
const mongoose = require("mongoose");

const typeDefs = gql(
  readFileSync(`${__dirname}/graphql/types/user.graphql`).toString("utf-8")
);

import { DB_URI } from "../database-config";

const createDatabaseConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI);
    console.log("✅ User Service: Connected to DB");
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
    context: async ({ req }: { req: any }) => {
      const user = req.headers.user ? JSON.parse(req.headers.user) : null;

      return user;
    },
    listen: { port: 4001 },
  });

  console.log(`🚀 User Service: Server ready at ${url}`);
};

startUserServiceServer();
