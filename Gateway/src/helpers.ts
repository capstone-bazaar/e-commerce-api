import { ENVIRONMENTS } from "./constants";

export const getOriginsAccordingToEnvironment = (env: string): [any] => {
  if (env === ENVIRONMENTS.DEVELOPMENT) {
    return [process.env.DEV_REACT_APP_URL];
  } else {
    return [process.env.DEV_REACT_APP_URL];
  }
};
