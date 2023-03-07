import {
  DataAccessCreateUserInput,
  DataAccessDeleteUserById,
  DataAccessFindUserByIdInput,
  DataAccessUpdateUserById,
  DataAccessUpdateUserAvatarByIdInput,
} from "./interfaces/user.interfaces";
import UserModel from "../db/user";

const createUser = ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: DataAccessCreateUserInput) => {
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

const findUserById = async ({ id }: DataAccessFindUserByIdInput) => {
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
}: DataAccessUpdateUserById) => {
  return await UserModel.findByIdAndUpdate(
    { _id: id },
    {
      fullName,
      phone,
      avatarURL,
      password,
      email,
      address,
    },
    { new: true }
  );
};
const deleteUserById = async ({ id }: DataAccessDeleteUserById) => {
  return await UserModel.deleteOne({
    _id: id,
  });
};
const findAllUsers = async () => {
  return await UserModel.find();
};

const updateUserAvatarById = async ({
  userId,
  avatarURL,
}: DataAccessUpdateUserAvatarByIdInput) => {
  return await UserModel.updateOne({ _id: userId }, { avatarURL });
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
