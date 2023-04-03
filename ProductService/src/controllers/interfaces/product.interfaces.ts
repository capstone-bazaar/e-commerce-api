export interface ControllerCreateProductInput {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy?: string;
  imageURLs: [string];
  comments: string;
}
export interface ControllerUpdateProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURLs: [string];
}
export interface ControllerAddProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURLs: [string];
}

export interface ControllerFindProductById {
  productID: string;
}
export interface ControllerFindAllProducts {}
export interface ControllerDeleteProductById {
  productID: string;
}
