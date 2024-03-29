import { ENVIRONMENTS } from "./src/constants";

let DB_URI = "";
if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
  DB_URI = `mongodb://${process.env.DB_DOMAIN}:${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
}

export { DB_URI };
