import UserServices from "../services/user";

interface UserType {
  fullName: string;
  phone: string;
  avatarURL?: string;
  password: string;
  email: string;
  address: string;
}

const createUser = async ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: UserType) => {
  return await UserServices.createUser({
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });
};

export default { createUser };
