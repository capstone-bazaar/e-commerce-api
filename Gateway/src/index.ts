import { getOriginsAccordingToEnvironment } from "./helpers";
import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { ENVIRONMENTS } from "./constants";
import { expressjwt } from "express-jwt";
import waitOn from "wait-on";
require("dotenv").config();

const startServer = async () => {
  const environment = process.env.NODE_ENV as string;
  const jwtSecret = process.env.JWT_SECRET as string;

  let gateway;

  if (environment === ENVIRONMENTS.DEVELOPMENT) {
    gateway = new ApolloGateway({
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: "userService", url: process.env.USER_SERVICE_URL },
          // { name: "paymentService", url: process.env.PAYMENT_SERVICE_URL },
          { name: "productService", url: process.env.PRODUCT_SERVICE_URL },
        ],
      }),
      buildService({ name, url }) {
        return new RemoteGraphQLDataSource({
          url,
          willSendRequest({
            request,
            context,
          }: {
            request: any;
            context: any;
          }) {
            request.http.headers.set(
              "user",
              context.user ? JSON.stringify(context.user) : null
            );
          },
        });
      },
    });
  } else {
    gateway = new ApolloGateway();
    //TODO: Add implementation of production subgraphs:
    //TODO: https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup
  }

  const app = express();

  const server = new ApolloServer({
    gateway,
  });

  await server.start();

  app.use(
    "/graphql",
    cors({
      origin: getOriginsAccordingToEnvironment(environment),
    }),
    json(),
    expressMiddleware(server, {
      context: async ({ req }: { req: any }) => {
        const user = req.user || null;
        return { user };
      },
    })
  );

  app.use(
    expressjwt({
      secret: jwtSecret,
      algorithms: ["HS256"],
      credentialsRequired: false,
    })
  );

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
};

const startGateWayWithAllServices = () => {
  const waitOnOptions = {
    resources: ["tcp:4001", "tcp:4002"],
  };
  waitOn(waitOnOptions)
    .then(() => {
      startServer();
    })
    .catch((err) => {
      console.error("ERR:", err);
    });
};

startGateWayWithAllServices();
