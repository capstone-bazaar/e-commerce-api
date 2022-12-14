import express, { Request, Response } from "express";
import http from "http";
const mongoose = require("mongoose");

import { DB_URI } from "../database-config";

require("dotenv").config();

const createDatabaseConnection = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Payment Service: Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

const startUserServiceServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  await createDatabaseConnection();

  app.get("/db", (req: Request, res: Response) => {
    //TODO: This endpoint is for test purposes.
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  console.log(`Payment Service: Server ready at http://localhost:4003`);
};

startUserServiceServer();
