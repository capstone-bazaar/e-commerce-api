export interface DataAccessCreateProductInput {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy?: string;
  imageURL: string;
  comments: string;
}
export interface DataAccessUpdateProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURL: string;
}
export interface DataAccessAddProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURL: string;
}

export interface DataAccessFindProductById {
  productID: string;
}
export interface DataAccessFindAllProducts {}
export interface DataAccessDeleteProductById {
  productID: string;
}
