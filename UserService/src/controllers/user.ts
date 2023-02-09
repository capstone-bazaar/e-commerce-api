import { UserSchemaInterface } from "./../db/interfaces/user.interfaces";
import {
  ControllerCreateUserInput,
  ControllerDeleteUserById,
  ControllerFindUserByIdInput,
  ControllerLoginUserInput,
  ControllerUpdateUserById,
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
  return await UserService.createUser({
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });
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
  return jwt.sign(
    { id: user._id, fullName: user.fullName, email: user.email, isAuth: true },
    `${process.env.JWT_SECRET}`,
    {
      expiresIn: "15d",
    }
  );
};

const findUserById = async ({ id }: ControllerFindUserByIdInput) => {
  return await UserService.findUserById({ id });
};

const updateUserById = async ({
  id,
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: ControllerUpdateUserById) => {
  return await UserService.updateUserById({
    id,
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
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

export default {
  createUser,
  login,
  findUserById,
  updateUserById,
  deleteUserById,
  findAllUsers,
};
