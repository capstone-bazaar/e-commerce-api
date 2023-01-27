import mongoose from "mongoose";
const { Schema, model} = mongoose;
interface UserSchemaType {
  fullName: String;
  phone: String;
  body: String;
  avatarURL?: String;
  password: String;
  email: String;
  address: String;
}
const userSchema = new Schema<UserSchemaType>(
  {
    fullName: String,
    phone: String,
    body: String,
    avatarURL: String,
    password: String,
    email: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = model<UserSchemaType>("User", userSchema);

export default UserModel;
