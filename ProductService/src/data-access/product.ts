import { ProductModel } from "../db/product";
import { Types } from "mongoose";

const ObjectId = Types.ObjectId;

interface ProductType {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy?: string;
  imageURL: string;
  comments: string;
}

const createProduct = ({
  price,
  currency,
  stockCount,
  seller,
  imageURL,
  comments,
}: ProductType) => {
  const product = new ProductModel({
    price,
    currency,
    stockCount,
    seller: new ObjectId(seller),
    imageURL,
    comments,
  });
  return product.save();
};

export default { createProduct };
