import {
  ControllerCreateProductInput,
  ControllerAddProductById,
  ControllerDeleteProductById,
  ControllerFindAllProducts,
  ControllerFindProductById,
  ControllerUpdateProductById,
} from "./interfaces/product.interfaces";
import ProductServices from "../services/product";

const createProduct = async ({
  price,
  currency,
  stockCount,
  seller,
  imageURLs,
  comments,
}: ControllerCreateProductInput) => {
  return await ProductServices.createProduct({
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
}: ControllerUpdateProductById) => {
  return await ProductServices.updateProductById({
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
}: ControllerAddProductById) => {
  return await ProductServices.addProduct({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURLs,
  });
};
const findProductById = async ({ productID }: ControllerFindProductById) => {
  return await ProductServices.findProductById({
    productID,
  });
};
const findAllProducts = async (fields: any) => {
  return await ProductServices.findAllProducts(fields);
};
const deleteProductById = async ({
  productID,
}: ControllerDeleteProductById) => {
  return await ProductServices.deleteProductById({
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
