export interface ControllerCreateProductInput {
  price: number;
  description: string;
  title: string;
  stockCount: number;
  seller: string;
  imageURLs: string[];
  category: string;
}
export interface ControllerUpdateProductById {
  productID: string;
  userID: string;
  price: number;
  category: string;
  title: string;
  description: string;
  stockCount: number;
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
