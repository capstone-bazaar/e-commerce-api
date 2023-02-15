import {
  ServiceCreateProductInput,
  ServiceAddProductById,
  ServiceDeleteProductById,
  ServiceFindAllProductById,
  ServiceFindProductById,
  ServiceUpdateProductById,
} from "./interfaces/product.interfaces";
import ProductDataAccess from "../data-access/product";

const createProduct = async ({
  price,
  currency,
  stockCount,
  seller,
  imageURL,
  comments,
}: ServiceCreateProductInput) => {
  return await ProductDataAccess.createProduct({
    price,
    currency,
    stockCount,
    seller,
    imageURL,
    comments,
  });
};

const updateProductById = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURL,
}: ServiceUpdateProductById) => {
  return await ProductDataAccess.updateProductById({
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
}: ServiceAddProductById) => {
  return await ProductDataAccess.addProductById({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURL,
  });
};
const findProductById = async ({ userID }: ServiceFindProductById) => {
  return await ProductDataAccess.findProductById({
    userID,
  });
};
const findAllProductById = async ({}: ServiceFindAllProductById) => {
  return await ProductDataAccess.findAllProductById({});
};
const deleteProductById = async ({ userID }: ServiceDeleteProductById) => {
  return await ProductDataAccess.deleteProductById({
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
