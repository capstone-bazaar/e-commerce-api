import UserModel from "../db/user";

export interface UserType {
  fullName: string;
  phone: string;
  avatarURL?: string;
  password: string;
  email: string;
  address?: string;
}

const createUser = ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: UserType) => {
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

export default { createUser, findUserById, findUser };
