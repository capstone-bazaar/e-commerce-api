import { UserSchemaInterface } from "./../db/interfaces/user.interfaces";
import {
  ControllerCreateUserInput,
  ControllerDeleteUserById,
  ControllerFindUserByIdInput,
  ControllerLoginUserInput,
  ControllerUpdateUserById,
  ControllerUpdateUserAvatarByIdInput,
  ControllerAddProductToShoppingCartByProductIdInput,
  ControllerRemoveProductFromShoppingCartByProductIdInput,
} from "./interfaces/user.interfaces";
import UserService from "../services/user";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const createUser = async ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: ControllerCreateUserInput) => {
  const user = await UserService.createUser({
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });

  if (user) {
    return {
      user: user._id,

      token: jwt.sign(
        {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          isAuth: true,
        },
        `${process.env.JWT_SECRET}`,
        {
          expiresIn: "15d",
        }
      ),
    };
  }

  throw new Error("Something went wrong");
};

const login = async ({ email, password }: ControllerLoginUserInput) => {
  const user: Promise<UserSchemaInterface> | any = await UserService.findUser({
    email,
  });

  if (!user) {
    throw new Error("We couldn't find user with this e-mail address.");
  }

  const isPasswordsMatched: boolean = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordsMatched) {
    throw new Error("Password and E-mail doesn't match!");
  }
  return {
    user: user._id,
    token: jwt.sign(
      {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        isAuth: true,
      },
      `${process.env.JWT_SECRET}`,
      {
        expiresIn: "15d",
      }
    ),
  };
};

const findUserById = async ({ id }: ControllerFindUserByIdInput) => {
  return await UserService.findUserById({ id });
};

const updateUserById = async ({ id, fields }: ControllerUpdateUserById) => {
  return await UserService.updateUserById({
    id,
    fields,
  });
};

const deleteUserById = async ({ id }: ControllerDeleteUserById) => {
  return await UserService.deleteUserById({
    id,
  });
};

const findAllUsers = async () => {
  return await UserService.findAllUsers();
};

const updateUserAvatarById = async ({
  userId,
  avatarURL,
}: ControllerUpdateUserAvatarByIdInput) => {
  return await UserService.updateUserAvatarById({ userId, avatarURL });
};

const verifyUserByVerificationId = async ({
  verificationID,
  id,
}: {
  verificationID: string;
  id: string;
}) => {
  return await UserService.verifyUserByVerificationId({ verificationID, id });
};

const addProductToShoppingCartByProductId = async ({
  userId,
  productId,
}: ControllerAddProductToShoppingCartByProductIdInput) => {
  return await UserService.addProductToShoppingCartByProductId({
    userId,
    productId,
  });
};

const removeProductFromShoppingCartByProductId = async ({
  userId,
  productId,
}: ControllerRemoveProductFromShoppingCartByProductIdInput) => {
  return await UserService.removeProductFromShoppingCartByProductId({
    userId,
    productId,
  });
};

export default {
  addProductToShoppingCartByProductId,
  removeProductFromShoppingCartByProductId,
  updateUserAvatarById,
  verifyUserByVerificationId,
  createUser,
  login,
  findUserById,
  updateUserById,
  deleteUserById,
  findAllUsers,
};
