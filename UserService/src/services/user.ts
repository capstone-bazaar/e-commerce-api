import bcrypt from "bcrypt";
import { amqpChannel } from "../connections/rabbitmq-connection";
import UserDataAccess from "../data-access/user";
import {
  ServiceCreateUserInput,
  ServiceDeleteUserById,
  ServiceFindUserByIdInput,
  ServiceUpdateUserById,
  ServiceUpdateUserAvatarByIdInput,
} from "./interfaces/user.interfaces";
const createUser = async ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: ServiceCreateUserInput) => {
  const user = await findUser({ email });

  if (user) {
    throw new Error("This user already exists!");
  }

  const hash = await bcrypt.hash(password, 10);

  const createdUser = await UserDataAccess.createUser({
    fullName,
    phone,
    avatarURL,
    password: hash,
    email,
    address,
  });

  if (createdUser && amqpChannel) {
    amqpChannel.sendToQueue(
      "mailQueue",
      Buffer.from(
        JSON.stringify({
          event: "welcome",
          payload: { name: createdUser.fullName, email: createdUser.email },
        })
      )
    );
  }

  return createdUser;
};

const findUserById = async ({ id }: ServiceFindUserByIdInput) => {
  return await UserDataAccess.findUserById({ id });
};

const findUser = async ({ email }: { email: string }) => {
  return await UserDataAccess.findUser({ email });
};
const updateUserById = async ({
  id,
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: ServiceUpdateUserById) => {
  return await UserDataAccess.updateUserById({
    id,
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });
};
const deleteUserById = async ({ id }: ServiceDeleteUserById) => {
  return await UserDataAccess.deleteUserById({
    id,
  });
};
const findAllUsers = async () => {
  return await UserDataAccess.findAllUsers();
};

const updateUserAvatarById = async ({
  userId,
  avatarURL,
}: ServiceUpdateUserAvatarByIdInput) => {
  return await UserDataAccess.updateUserAvatarById({ userId, avatarURL });
};

export default {
  updateUserAvatarById,
  createUser,
  findUserById,
  findUser,
  updateUserById,
  deleteUserById,
  findAllUsers,
};
