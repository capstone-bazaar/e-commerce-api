require("dotenv").config();
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { resolvers } from "./graphql/resolvers/user";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();
import { readFileSync } from "fs";
import { createAmqpConnection } from "./connections/rabbitmq-connection";
const mongoose = require("mongoose");

const typeDefs = gql(
  readFileSync(`${__dirname}/graphql/types/user.graphql`).toString("utf-8")
);

import { DB_URI } from "../database-config";
import { router } from "./routes/user";

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

  await server.start();

  app.use(express.json());
  app.use("/", express.urlencoded({ extended: true }), router);
  app.use(
    expressMiddleware(server, {
      context: ({ req }: { req: any }) => {
        const user = req.headers.user ? JSON.parse(req.headers.user) : null;
        return user;
      },
    })
  );

  app.listen({ port: 4001 }, () => {
    console.log(`🚀 Server ready at http://localhost:4001/`);
  });
};

startUserServiceServer();
