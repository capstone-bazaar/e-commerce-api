import { getOriginsAccordingToEnvironment } from "./helpers";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import { json } from "body-parser";
import cors from "cors";
import { ENVIRONMENTS } from "./constants";
require("dotenv").config();

const startServer = async () => {
  const environment = process.env.NODE_ENV as string;
  let gateway;

  if (environment === ENVIRONMENTS.DEVELOPMENT) {
    gateway = new ApolloGateway({
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: "userService", url: process.env.USER_SERVICE_URL },
          { name: "paymentService", url: process.env.PAYMENT_SERVICE_URL },
          { name: "productService", url: process.env.PRODUCT_SERVICE_URL },
        ],
      }),
    });
  } else {
    gateway = new ApolloGateway();
    //TODO: Add implementation of production subgraphs:
    //TODO: https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup
  }

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    gateway,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors({
      origin: getOriginsAccordingToEnvironment(environment),
    }),
    json(),
    expressMiddleware(server, {
      context: async ({ req }: { req: any }) => ({ token: req.headers.token }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
};

startServer();
