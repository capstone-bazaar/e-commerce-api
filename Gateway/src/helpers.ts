import { ENVIRONMENTS } from "./constants";
import jwt from "jsonwebtoken";

export const getOriginsAccordingToEnvironment = (env: string): [any] => {
  if (env === ENVIRONMENTS.DEVELOPMENT) {
    return ["http://localhost:3000"];
  } else {
    return [process.env.REACT_APP_URL];
  }
};

export const verifyToken = (token: string) => {
  const jwtSecret = process.env.JWT_SECRET as string;

  if (token) {
    const [firstPart, secondPart] = token.split(" ");
    if (firstPart !== "Bearer") {
      throw new Error("Authentication must use Bearer!");
    }

    try {
      return jwt.verify(secondPart, jwtSecret);
    } catch (err) {
      console.log(err);
      throw new Error("User must be authenticated.");
    }
  }

  return "Token must be provided!";
};
