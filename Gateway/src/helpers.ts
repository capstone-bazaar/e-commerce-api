import { ENVIRONMENTS } from "./constants";

export const getOriginsAccordingToEnvironment = (env: string): [any] => {
  if (env === ENVIRONMENTS.DEVELOPMENT) {
    return ["http://localhost:3000"];
  } else {
    return [process.env.REACT_APP_URL];
  }
};
