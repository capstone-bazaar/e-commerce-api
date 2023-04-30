import { Types } from "mongoose";

export interface AddressSchemaInterface {
  _id: string;
  address: string;
  title: string;
}
export interface UserSchemaInterface {
  _id: String;
  fullName: String;
  phone: String;
  body: String;
  avatarURL?: String;
  password: String;
  email: String;
  addresses: AddressSchemaInterface[];
  verificationID: String;
  isVerified: Boolean;
  shoppingCart: Types.ObjectId[];
  budget: Number;
}
