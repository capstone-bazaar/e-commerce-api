import UserController from "../../controllers/user";
import { IUser } from "../../types";

const resolvers = {
  Query: {
    async me(_: any, __: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      return await UserController.findUserById({ id: ctx.id });
    },
  },
  Mutation: {
    async login(_: any, { email, password }: IUser, ___: any) {
      return await UserController.login({ email, password });
    },
    async register(
      _: any,
      { email, password, phone, fullName }: IUser,
      ___: any
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
    async __resolveReference(user: any) {
      return await UserController.findUserById({ id: user.id });
    },
  },
};

export { resolvers };
