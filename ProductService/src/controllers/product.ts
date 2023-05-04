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
  seller,
  price,
  stockCount,
  description,
  title,
  imageURLs,
}: ControllerCreateProductInput) => {
  return await ProductServices.createProduct({
    price,
    seller,
    stockCount,
    description,
    title,
    imageURLs,
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
  findProductById,
  findAllProducts,
  deleteProductById,
};
