import {
  DataAccessCreateProductInput,
  DataAccessAddProductById,
  DataAccessFindAllProducts,
  DataAccessFindProductById,
  DataAccessUpdateProductById,
  DataAccessDeleteProductById,
} from "./interfaces/product.interfaces";
import { ProductModel } from "../db/product";
import mongoose, { Types } from "mongoose";

const ObjectId = Types.ObjectId;

const createProduct = ({
  price,
  currency,
  stockCount,
  seller,
  imageURLs,
  comments,
}: DataAccessCreateProductInput) => {
  const product = new ProductModel({
    price,
    currency,
    stockCount,
    seller: new ObjectId(seller),
    imageURLs,
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
  imageURLs,
}: DataAccessUpdateProductById) => {
  return await ProductModel.updateOne({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURLs,
  });
};
const addProduct = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURLs,
}: DataAccessAddProductById) => {
  return await ProductModel.create({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURLs,
  });
};
const findProductById = async ({ productID }: DataAccessFindProductById) => {
  return await ProductModel.findOne({
    _id: productID,
  });
};
const findAllProducts = async () => {
  return await ProductModel.find();
};
const deleteProductById = async ({
  productID,
}: DataAccessDeleteProductById) => {
  return await ProductModel.deleteOne({
    _id: new mongoose.Types.ObjectId(productID),
  });
};
export default {
  createProduct,
  updateProductById,
  addProduct,
  findProductById,
  findAllProducts,
  deleteProductById,
};
