import UserController from "../../controllers/user";
import { UserType } from "../../data-access/user";

const resolvers = {
  Query: {
    me() {
      return;
    },
  },
  Mutation: {
    async login(
      parent: any,
      { email, password }: UserType,
      ctx: any
    ): Promise<string> {
      return await UserController.login({ email, password });

      return "ertna";
    },
    async register(
      parent: any,
      { email, password, phone, fullName }: UserType,
      ctx: any
    ) {
      return await UserController.createUser({
        email,
        password,
        phone,
        fullName,
      });
    },
  },
  User: {
    __resolveReference() {},
  },
};

export { resolvers };
