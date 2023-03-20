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
const addProduct = async ({
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
