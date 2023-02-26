import express, { Express } from "express";
import { createAmqpConnection } from "./connections/rabbitmq-connection";

const app: Express = express();

createAmqpConnection();

app.listen(process.env.PORT, () => {
  console.log(`🚀 Mail Service: Server ready at ${process.env.PORT}`);
});
