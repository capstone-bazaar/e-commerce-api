import { UserSchemaInterface } from "./interfaces/user.interfaces";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema<UserSchemaInterface>(
  {
    fullName: String,
    phone: String,
    body: String,
    avatarURL: String,
    password: String,
    email: String,
    address: String,
    verificationID: String,
    isVerified: Boolean,
    shoppingCart: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

const UserModel = model<UserSchemaInterface>("User", userSchema);

export default UserModel;
