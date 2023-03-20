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
  productID: string;
}
export interface ControllerFindAllProducts {}
export interface ControllerDeleteProductById {
  productID: string;
}
