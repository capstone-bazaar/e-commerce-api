import { getOriginsAccordingToEnvironment } from "./helpers";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { ENVIRONMENTS } from "./constants";
import { verifyToken } from "./helpers";
import  graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import waitOn from "wait-on";
require("dotenv").config();
const app = express();

import FileUploadDataSource from "@profusion/apollo-federation-upload";

const startServer = async () => {
  const environment = process.env.NODE_ENV as string;

  let gateway;

  if (environment === ENVIRONMENTS.DEVELOPMENT) {
    gateway = new ApolloGateway({
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: "userService", url: process.env.USER_SERVICE_URL },
          { name: "orderService", url: process.env.PAYMENT_SERVICE_URL },
          { name: "productService", url: process.env.PRODUCT_SERVICE_URL },
        ],
      }),
      buildService({ name, url }) {
        return new FileUploadDataSource({
          url,
          useChunkedTransfer: true,
          willSendRequest({
            request,
            context,
          }: {
            request: any;
            context: any;
          }) {
            request.http.headers.set(
              "user",
              context.id && context.fullName && context.email && context.isAuth
                ? JSON.stringify(context)
                : null
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

  const server = new ApolloServer({
    gateway,
  });

  await server.start();
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  app.use(
    "/graphql",
    cors({
      origin: getOriginsAccordingToEnvironment(environment),
    }),
    json(),
    expressMiddleware(server, {
      context: async ({ req }: { req: any }) => {
        interface JwtPayload {
          id: string;
          iat: number;
          exp: number;
        }
        const verifiedToken = verifyToken(
          req.headers.authorization
        ) as JwtPayload;

        const user = verifiedToken || null;
        return user;
      },
    })
  );

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
};

const startGateWayWithAllServices = () => {
  const waitOnOptions = {
    resources: ["tcp:4001", "tcp:4002", "tcp:4003", "tcp:4004"],
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
