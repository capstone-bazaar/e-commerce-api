import { Response, Request } from "express";

export default function serviceHealthHandler(req: Request, res: Response) {
  res.send("I am Alive!!");
}
