import { DataAccessCreateProductInput } from "./interfaces/product.interfaces";
import { ProductModel } from "../db/product";
import { Types } from "mongoose";

const ObjectId = Types.ObjectId;

const createProduct = ({
  price,
  currency,
  stockCount,
  seller,
  imageURL,
  comments,
}: DataAccessCreateProductInput) => {
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
