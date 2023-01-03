import express, { Express, Request, Response } from "express";
import jwt from "jsonwebtoken";
import validateService from "./middlewares/serviceValidator";

const app: Express = express();

app.get("/mailService/health", (req: Request, res: Response) => {
  res.send("I'am alive!!");
});

app.use(validateService);

app.post("/mailService/event", (req: Request, res: Response) => {
  res.send("Hello");
});

app.get("/mailService/token", (req: Request, res: Response) => {
  res.send(
    jwt.sign({ serviceName: "User" }, `${process.env.MAIL_SERVICE_SECRET_KEY}`)
  );
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Product Service: Server ready at ${process.env.PORT}`);
});
