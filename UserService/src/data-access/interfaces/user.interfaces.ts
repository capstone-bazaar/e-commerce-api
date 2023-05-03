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

export interface DataAccessUpdateUserAvatarByIdInput {
  userId: string;
  avatarURL: string;
}

export interface DataAccessUpdateUserById {
  id: string;
  fields: any;
}

export interface DataAccessDeleteUserById {
  id: string;
}

export interface DataAccessAddProductToShoppingCartByProductIdInput {
  userId: string;
  productId: string;
}

export interface DataAccessRemoveProductFromShoppingCartByProductIdInput {
  userId: string;
  productId: string;
}
