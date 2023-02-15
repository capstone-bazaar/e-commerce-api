import {
  ControllerCreateProductInput,
  ControllerAddProductById,
  ControllerDeleteProductById,
  ControllerFindAllProductById,
  ControllerFindProductById,
  ControllerUpdateProductById,
} from "./interfaces/product.interfaces";
import ProductServices from "../services/product";

const createProduct = async ({
  price,
  currency,
  stockCount,
  seller,
  imageURL,
  comments,
}: ControllerCreateProductInput) => {
  return await ProductServices.createProduct({
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
}: ControllerUpdateProductById) => {
  return await ProductServices.updateProductById({
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
}: ControllerAddProductById) => {
  return await ProductServices.addProductById({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURL,
  });
};
const findProductById = async ({ userID }: ControllerFindProductById) => {
  return await ProductServices.findProductById({
    userID,
  });
};
const findAllProductById = async ({}: ControllerFindAllProductById) => {
  return await ProductServices.findAllProductById({});
};
const deleteProductById = async ({ userID }: ControllerDeleteProductById) => {
  return await ProductServices.deleteProductById({
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
