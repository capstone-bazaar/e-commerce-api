import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

function serviceValidator(token: string): boolean {
  const secretKey = process.env.MAIL_SERVICE_SECRET_KEY as string;

  try {
    jwt.verify(token, secretKey);
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}

export default function validateService(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isRequestValid = serviceValidator(req.headers.authorization as string);

  if (!isRequestValid) {
    return res.status(401).send("Unauthenticated service!");
  }
  next();
}
