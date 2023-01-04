import { Response, Request } from "express";
import jwt from "jsonwebtoken";

export default function tokenHandler(req: Request, res: Response) {
  res.send(
    jwt.sign(
      { serviceName: req.body.serviceName },
      `${process.env.MAIL_SERVICE_SECRET_KEY}`
    )
  );
}
