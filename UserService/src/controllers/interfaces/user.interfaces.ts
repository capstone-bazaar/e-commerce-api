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

export interface ControllerUpdateUserAvatarByIdInput {
  userId: string;
  avatarURL: string;
}

export interface ControllerDeleteUserById {
  id: string;
}

export interface ControllerAddProductToShoppingCartByProductIdInput {
  userId: string;
  productId: string;
}

export interface ControllerRemoveProductFromShoppingCartByProductIdInput {
  userId: string;
  productId: string;
}
