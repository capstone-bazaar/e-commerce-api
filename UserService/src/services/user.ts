import UserDataAccess from "../data-access/user";

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
  return await UserDataAccess.createUser({
    fullName,
    phone,
    avatarURL,
    password,
    email,
    address,
  });
};

export default { createUser };
