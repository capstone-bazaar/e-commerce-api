import bcrypt from "bcrypt";
import UserDataAccess from "../data-access/user";
import { IUser } from "../types";
const createUser = async ({
  fullName,
  phone,
  avatarURL,
  password,
  email,
  address,
}: IUser) => {
  const user = await findUser({ email });

  if (user) {
    throw new Error("This user already exists!");
  }

  const hash = await bcrypt.hash(password, 10);

  return await UserDataAccess.createUser({
    fullName,
    phone,
    avatarURL,
    password: hash,
    email,
    address,
  });
};

const findUserById = async ({ id }: { id: string }) => {
  return await UserDataAccess.findUserById({ id });
};

const findUser = async ({ email }: { email: string }) => {
  return await UserDataAccess.findUser({ email });
};

export default { createUser, findUserById, findUser };
