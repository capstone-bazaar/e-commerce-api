var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getOriginsAccordingToEnvironment } from "./helpers";
import { ApolloGateway, IntrospectAndCompose, RemoteGraphQLDataSource, } from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { ENVIRONMENTS } from "./constants";
import { verifyToken } from "./helpers";
import waitOn from "wait-on";
require("dotenv").config();
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const environment = process.env.NODE_ENV;
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
                return new RemoteGraphQLDataSource({
                    url,
                    willSendRequest({ request, context, }) {
                        request.http.headers.set("user", context.id && context.fullName && context.email && context.isAuth
                            ? JSON.stringify(context)
                            : null);
                    },
                });
            },
        });
    }
    else {
        gateway = new ApolloGateway();
        //TODO: Add implementation of production subgraphs:
        //TODO: https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup
    }
    const app = express();
    const server = new ApolloServer({
        gateway,
    });
    yield server.start();
    app.use("/graphql", cors({
        origin: getOriginsAccordingToEnvironment(environment),
    }), json(), expressMiddleware(server, {
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () {
            const verifiedToken = verifyToken(req.headers.authorization);
            const user = verifiedToken || null;
            return user;
        }),
    }));
    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    });
});
const startGateWayWithAllServices = () => {
    const waitOnOptions = {
        resources: ["tcp:4001", "tcp:4002", "tcp:4003"],
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
