export interface ServiceCreateProductInput {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy?: string;
  imageURL: string;
  comments: string;
}
export interface ServiceUpdateProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURL: string;
}
export interface ServiceAddProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURL: string;
}

export interface ServiceFindProductById {
  productID: string;
}
export interface ServiceFindAllProductById {}
export interface ServiceDeleteProductById {
  productID: string;
}
