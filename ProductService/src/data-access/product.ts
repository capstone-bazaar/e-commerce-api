import {
  DataAccessCreateProductInput,
  DataAccessAddProductById,
  DataAccessFindAllProductById,
  DataAccessFindProductById,
  DataAccessUpdateProductById,
  DataAccessDeleteProductById,
} from "./interfaces/product.interfaces";
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
const updateProductById = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURL,
}: DataAccessUpdateProductById) => {
  return await ProductModel.updateOne({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURL,
  });
};
const addProductById = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURL,
}: DataAccessAddProductById) => {
  return await ProductModel.create({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURL,
  });
};
const findProductById = async ({ userID }: DataAccessFindProductById) => {
  return await ProductModel.findOne({
    userID,
  });
};
const findAllProductById = async ({}: DataAccessFindAllProductById) => {
  return await ProductModel.find({});
};
const deleteProductById = async ({ userID }: DataAccessDeleteProductById) => {
  return await ProductModel.deleteOne({
    userID,
  });
};
export default {
  createProduct,
  updateProductById,
  addProductById,
  findProductById,
  findAllProductById,
  deleteProductById,
};
