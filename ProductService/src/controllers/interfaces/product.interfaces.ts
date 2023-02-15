export interface ControllerCreateProductInput {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy?: string;
  imageURL: string;
  comments: string;
}
export interface ControllerUpdateProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURL: string;
}
export interface ControllerAddProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURL: string;
}

export interface ControllerFindProductById {
  userID: string;
}
export interface ControllerFindAllProductById {}
export interface ControllerDeleteProductById {
  userID: string;
}
