import {
  ServiceCreateProductInput,
  ServiceAddProductById,
  ServiceDeleteProductById,
  ServiceFindProductById,
  ServiceUpdateProductById,
  ServiceFindAllProducts,
} from "./interfaces/product.interfaces";
import ProductDataAccess from "../data-access/product";

const createProduct = async ({
  price,
  currency,
  stockCount,
  seller,
  imageURLs,
  comments,
}: ServiceCreateProductInput) => {
  return await ProductDataAccess.createProduct({
    price,
    currency,
    stockCount,
    seller,
    imageURLs,
    comments,
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
const addProduct = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURLs,
}: ServiceAddProductById) => {
  return await ProductDataAccess.addProduct({
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
  addProduct,
  findProductById,
  findAllProducts,
  deleteProductById,
};
