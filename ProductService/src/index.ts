import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import { resolvers } from "./graphql/resolvers/product";

import { expressMiddleware } from "@apollo/server/express4";
import { readFileSync } from "fs";
import express from "express";
import cors from "cors";

const app = express();
const mongoose = require("mongoose");
const typeDefs = gql(
  readFileSync(`${__dirname}/graphql/types/product.graphql`).toString("utf-8")
);

import { DB_URI } from "../database-config";
import { createAmqpConnection } from "./connections/rabbitmq-connection";
import { router } from "./routes/product";

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
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.json({ limit: "50mb" }));
  app.use("/", express.urlencoded({ extended: true }), router);

  app.use(
    expressMiddleware(server, {
      context: ({ req }: { req: any }) => {
        const user = req.headers.user ? JSON.parse(req.headers.user) : null;
        return user;
      },
    })
  );

  app.listen({ port: 4002 }, () => {
    console.log(`🚀 Server ready at http://localhost:4002/`);
  });
};

startUserServiceServer();
