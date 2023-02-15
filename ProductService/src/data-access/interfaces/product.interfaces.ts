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
  userID: string;
}
export interface DataAccessFindAllProductById {}
export interface DataAccessDeleteProductById {
  userID: string;
}
