import UserModel from "../db/user";
import { IUser } from "../types";

const createUser = ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: IUser) => {
  const user = new UserModel({
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });
  return user.save();
};

const findUserById = async ({ id }: { id: string }) => {
  return await UserModel.findById(id);
};

const findUser = async ({ email }: { email: string }) => {
  return await UserModel.findOne({ email });
};
const updateUserById = async ({
  id,
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: {
  id: string;
  fullName: string;
  phone: string;
  avatarURL: string;
  password: string;
  email: string;
  address: string;
}) => {
  return await UserModel.updateOne({
    id,
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });
};
const deleteUserById = async ({ id }: { id: string }) => {
  return await UserModel.deleteOne({
    _id: id,
  });
};
const findAllUsers = async () => {
  return await UserModel.find();
};
export default {
  createUser,
  findUserById,
  findUser,
  updateUserById,
  deleteUserById,
  findAllUsers,
};
