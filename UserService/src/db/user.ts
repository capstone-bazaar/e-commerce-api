import {
  AddressSchemaInterface,
  UserSchemaInterface,
} from "./interfaces/user.interfaces";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const addressSchema = new Schema<AddressSchemaInterface>({
  address: String,
  title: String,
});

const userSchema = new Schema<UserSchemaInterface>(
  {
    fullName: String,
    phone: String,
    body: String,
    avatarURL: String,
    password: String,
    email: String,
    addresses: { type: [addressSchema], default: [] },
    verificationID: String,
    isVerified: Boolean,
    shoppingCart: [Schema.Types.ObjectId],
    budget: Number,
  },
  {
    timestamps: true,
  }
);

const UserModel = model<UserSchemaInterface>("User", userSchema);

export default UserModel;
