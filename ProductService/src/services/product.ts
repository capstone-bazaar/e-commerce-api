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
const addProduct = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURL,
}: ServiceAddProductById) => {
  return await ProductDataAccess.addProduct({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURL,
  });
};
const findProductById = async ({ productID }: ServiceFindProductById) => {
  return await ProductDataAccess.findProductById({
    productID,
  });
};
const findAllProductById = async ({}: ServiceFindAllProductById) => {
  return await ProductDataAccess.findAllProductById({});
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
  findAllProductById,
  deleteProductById,
};
