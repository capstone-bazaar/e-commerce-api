export interface ControllerCreateUserInput {
  id?: string;
  fullName: string;
  phone: string;
  avatarURL?: string;
  password: string;
  email: string;
  address?: string;
}

export interface ControllerLoginUserInput {
  email: string;
  password: string;
}

export interface ControllerFindUserByIdInput {
  id: string;
}

export interface ControllerUpdateUserById {
  id: string;
  fullName: string;
  phone: string;
  avatarURL: string;
  password: string;
  email: string;
  address: string;
}

export interface ControllerDeleteUserById {
  id: string;
}
