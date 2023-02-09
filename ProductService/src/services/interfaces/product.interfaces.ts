export interface ServiceCreateProductInput {
    price: number;
    currency: string;
    stockCount: number;
    seller: string;
    orderedBy?: string;
    imageURL: string;
    comments: string;
  }
  