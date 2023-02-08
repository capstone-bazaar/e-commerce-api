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
    async findAllUsers(_: any, __: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      return await UserController.findAllUsers();
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
    async updateUser(
      _: any,
      args: {
        fields: {
          id: string;
          fullName: string;
          phone: string;
          avatarURL: string;
          password: string;
          email: string;
          address: string;
        };
      },
      ctx: any
    ) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      const { id, fullName, phone, avatarURL, password, email, address } =
        args.fields;

      return await UserController.updateUserById({
        id,
        fullName,
        phone,
        avatarURL,
        password,
        email,
        address,
      });
    },
    async deleteUser(_: any, args: { id: string }, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      const { id } = args;

      try {
        await UserController.deleteUserById({
          id,
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
  User: {
    async __resolveReference(user: any) {
      return await UserController.findUserById({ id: user.id });
    },
  },
};

export { resolvers };
