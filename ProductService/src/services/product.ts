import {
  ServiceCreateProductInput,
  ServiceDeleteProductById,
  ServiceFindProductById,
  ServiceUpdateProductById,
} from "./interfaces/product.interfaces";
import ProductDataAccess from "../data-access/product";

const createProduct = async ({
  price,
  stockCount,
  seller,
  imageURLs,
  description,
  title,
}: ServiceCreateProductInput) => {
  return await ProductDataAccess.createProduct({
    price,
    stockCount,
    seller,
    imageURLs,
    description,
    title,
  });
};

const updateProductById = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURLs,
}: ServiceUpdateProductById) => {
  return await ProductDataAccess.updateProductById({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURLs,
  });
};

const findProductById = async ({ productID }: ServiceFindProductById) => {
  return await ProductDataAccess.findProductById({
    productID,
  });
};
const findAllProducts = async (fields: any) => {
  return await ProductDataAccess.findAllProducts(fields);
};
const deleteProductById = async ({ productID }: ServiceDeleteProductById) => {
  return await ProductDataAccess.deleteProductById({
    productID,
  });
};
export default {
  createProduct,
  updateProductById,
  findProductById,
  findAllProducts,
  deleteProductById,
};
