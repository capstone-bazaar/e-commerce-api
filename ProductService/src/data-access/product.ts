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
  stockCount,
  seller,
  imageURLs,
  description,
  title,
}: DataAccessCreateProductInput) => {
  const product = new ProductModel({
    price,
    description,
    title,
    currency: "$",
    stockCount,
    seller: new ObjectId(seller),
    imageURLs,
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

const findProductById = async ({ productID }: DataAccessFindProductById) => {
  return await ProductModel.findOne({
    _id: productID,
  });
};
const findAllProducts = async (fields: any) => {
  if (fields.products && fields.products.length > 0) {
    return await ProductModel.find({ _id: { $in: fields.products } });
  }
  return await ProductModel.find(fields);
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
  findProductById,
  findAllProducts,
  deleteProductById,
};
