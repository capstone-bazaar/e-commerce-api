export interface ControllerCreateProductInput {
  price: number;
  description:string,
  title: string,
  stockCount: number;
  seller: string;
  imageURLs: string[];
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
  stockCount: number;
  description: string;
  title: string;
  imageURLs: [string];
}

export interface ControllerFindProductById {
  productID: string;
}
export interface ControllerFindAllProducts {
  products?: string[];
}
export interface ControllerDeleteProductById {
  productID: string;
}
