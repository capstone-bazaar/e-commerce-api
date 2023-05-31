export interface ServiceCreateProductInput {
  price: number;
  stockCount: number;
  seller: string;
  imageURLs: string[];
  description: string;
  title: string;
  category: string;
}
export interface ServiceUpdateProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURLs: string[];
}
export interface ServiceAddProductById {
  userID: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  imageURLs: string[];
}

export interface ServiceFindProductById {
  productID: string;
}
export interface ServiceFindAllProducts {
  products?: string[];
}
export interface ServiceDeleteProductById {
  productID: string;
}
