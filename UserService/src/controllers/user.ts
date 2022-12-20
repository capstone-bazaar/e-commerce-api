import UserService from "../services/user";
import bcrypt from "bcrypt";
import { UserSchemaType } from "../db/user";

import jwt from "jsonwebtoken";
interface IUserType {
  fullName: string;
  phone: string;
  avatarURL?: string;
  password: string;
  email: string;
  address?: string;
}

const createUser = async ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: IUserType) => {
  return await UserService.createUser({
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });
};

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user: Promise<UserSchemaType> | any = await UserService.findUser({
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

  return jwt.sign({ id: user._id }, `${process.env.JWT_SECRET}`, {
    expiresIn: "15d",
  });
};

export default { createUser, login };
