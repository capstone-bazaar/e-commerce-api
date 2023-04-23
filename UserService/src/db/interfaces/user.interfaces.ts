import { Types } from "mongoose";
export interface UserSchemaInterface {
  _id: String;
  fullName: String;
  phone: String;
  body: String;
  avatarURL?: String;
  password: String;
  email: String;
  address: String;
  verificationID: String;
  isVerified: Boolean;
  shoppingCart: Types.ObjectId[];
}
