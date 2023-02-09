export interface DataAccessCreateUserInput {
  id?: string;
  fullName: string;
  phone: string;
  avatarURL?: string;
  password: string;
  email: string;
  address?: string;
}

export interface DataAccessFindUserByIdInput {
  id: string;
}

export interface DataAccessUpdateUserById {
  id: string;
  fullName: string;
  phone: string;
  avatarURL: string;
  password: string;
  email: string;
  address: string;
}

export interface DataAccessDeleteUserById {
  id: string;
}
