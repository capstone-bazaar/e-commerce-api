import UserModel from "../db/user";

interface UserType {
  fullName: string;
  phone: string;
  avatarURL?: string;
  password: string;
  email: string;
  address: string;
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

export default { createUser };
