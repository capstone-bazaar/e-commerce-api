import express, { Express } from "express";
import emailHandler from "./handler/emailHandler";
import serviceHealthHandler from "./handler/serviceHealthHandler";
import tokenHandler from "./handler/tokenHandler";
import validateService from "./middlewares/serviceValidator";

const app: Express = express();

app.get("/mailService/health", serviceHealthHandler);

app.use(validateService);
app.use(express.json({ limit: "100mb" }));

app.post("/mailService/event", emailHandler);
app.get("/mailService/token", tokenHandler);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Mail Service: Server ready at ${process.env.PORT}`);
});
