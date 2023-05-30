import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { resolvers } from "./graphql/resolvers/order";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

import { readFileSync } from "fs";
const mongoose = require("mongoose");
const typeDefs = gql(
  readFileSync(`${__dirname}/graphql/types/order.graphql`).toString("utf-8")
);
const app = express();

import { DB_URI } from "../database-config";
import { createAmqpConnection } from "./connections/rabbitmq-connection";
import { router } from "./routes/order";

require("dotenv").config();

const createDatabaseConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI);
    console.log("✅ Order Service: Connected to DB");
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
  app.use(
    cors({
      origin: "*",
    })
  );
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

  app.listen({ port: 4003 }, () => {
    console.log(`🚀 Server ready at http://localhost:4003/`);
  });
};

startUserServiceServer();
