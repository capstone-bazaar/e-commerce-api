import {
  DataAccessCreateUserInput,
  DataAccessDeleteUserById,
  DataAccessFindUserByIdInput,
  DataAccessUpdateUserById,
  DataAccessUpdateUserAvatarByIdInput,
  DataAccessAddProductToShoppingCartByProductIdInput,
  DataAccessRemoveProductFromShoppingCartByProductIdInput,
} from "./interfaces/user.interfaces";
import UserModel from "../db/user";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";

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
    isVerified: false,
    verificationID: uuidv4(),
  });
  return user.save();
};

const findUserById = async ({ id }: DataAccessFindUserByIdInput) => {
  return await UserModel.findById(id);
};

const verifyUserByVerificationId = async ({
  verificationID,
  id,
}: {
  verificationID: string;
  id: string;
}) => {
  return await UserModel.findOneAndUpdate(
    { verificationID, _id: new mongoose.Types.ObjectId(id) },
    { isVerified: true },
    { returnOriginal: false }
  );
};

const findUser = async ({ email }: { email: string }) => {
  return await UserModel.findOne({ email });
};
const updateUserById = async ({ id, fields }: DataAccessUpdateUserById) => {
  return await UserModel.findByIdAndUpdate(
    { _id: id },
    {
      ...fields,
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

const addProductToShoppingCartByProductId = async ({
  userId,
  productId,
}: DataAccessAddProductToShoppingCartByProductIdInput) => {
  return await UserModel.updateOne(
    { _id: userId },
    { $push: { shoppingCart: productId } }
  );
};

const removeProductFromShoppingCartByProductId = async ({
  userId,
  productId,
}: DataAccessRemoveProductFromShoppingCartByProductIdInput) => {
  return await UserModel.updateOne(
    { _id: userId },
    { $pull: { shoppingCart: productId } }
  );
};

export default {
  addProductToShoppingCartByProductId,
  updateUserAvatarById,
  removeProductFromShoppingCartByProductId,
  verifyUserByVerificationId,
  createUser,
  findUserById,
  findUser,
  updateUserById,
  deleteUserById,
  findAllUsers,
};
