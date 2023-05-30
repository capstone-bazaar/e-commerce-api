export interface DataAccessCreateProductInput {
  price: number;
  stockCount: number;
  seller: string;
  imageURLs: string[];
  description: string;
  title: string;
  category: string;
}
export interface DataAccessUpdateProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURLs: string[];
}
export interface DataAccessAddProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURLs: string[];
}

export interface DataAccessFindProductById {
  productID: string;
}

export interface DataAccessFindAllProducts {
  products?: string[];
}
export interface DataAccessDeleteProductById {
  productID: string;
}
