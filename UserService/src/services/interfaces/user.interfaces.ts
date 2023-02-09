export interface ServiceCreateUserInput {
  id?: string;
  fullName: string;
  phone: string;
  avatarURL?: string;
  password: string;
  email: string;
  address?: string;
}

export interface ServiceFindUserByIdInput {
  id: string;
}

export interface ServiceUpdateUserById {
  id: string;
  fullName: string;
  phone: string;
  avatarURL: string;
  password: string;
  email: string;
  address: string;
}

export interface ServiceDeleteUserById {
  id: string;
}
