import { model } from "mongoose";
import UserController from "../../controllers/user";
import { IUser } from "../../types";
import { uploadToStorage } from "../../helpers/image-upload";
import { nanoid } from "nanoid";

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
        fields: { fullName, phone, avatarURL, password, email, address },
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
    async addProductToShoppingCart(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      const updatedUser = UserController.addProductToShoppingCartByProductId({
        userId: ctx.id,
        productId: args.productId,
      });

      return !updatedUser;
    },
    async removeProductFromShoppingCart(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      const updatedUser =
        UserController.removeProductFromShoppingCartByProductId({
          userId: ctx.id,
          productId: args.productId,
        });

      return !!updatedUser;
    },
    async uploadUserPhoto(_: any, { photo }: { photo: any }, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      const uploadedImage = await uploadToStorage({
        filename: `${ctx.id}-${nanoid(5)}`,
        file: photo,
      });

      if (!uploadedImage) return;

      await UserController.updateUserAvatarById({
        userId: ctx.id,
        avatarURL: uploadedImage.Location,
      });
    },
    async verifyUser(
      _: any,
      args: { verificationID: string; id: string },
      ctx: any
    ) {
      const { verificationID, id } = args;

      if (!verificationID || !id) {
        throw new Error("Verification ID is missing!");
      }

      try {
        const data = await UserController.verifyUserByVerificationId({
          verificationID,
          id,
        });

        if (!data) {
          throw new Error("Verification failed!");
        }
      } catch (error) {
        throw new Error(error as string);
      }
    },
  },
  User: {
    async __resolveReference(user: any) {
      return await UserController.findUserById({ id: user.id });
    },
    shoppingCart(product: any) {
      let cartList: { __typename: string; id: string }[] = [];
      product.shoppingCart.forEach((prodId: any) =>
        cartList.push({ __typename: "Product", id: prodId })
      );

      return cartList;
    },
    password() {
      return "Not allowed";
    },
  },
};

export { resolvers };
