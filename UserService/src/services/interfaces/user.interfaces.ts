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

export interface ServiceUpdateUserAvatarByIdInput {
  userId: string;
  avatarURL: string;
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

export interface ServiceAddProductToShoppingCartByProductIdInput {
  userId: string;
  productId: string;
}

export interface ServiceRemoveProductFromShoppingCartByProductIdInput {
  userId: string;
  productId: string;
}
