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
const addProduct = async ({
  userID,
  price,
  currency,
  stockCount,
  seller,
  imageURL,
}: ControllerAddProductById) => {
  return await ProductServices.addProduct({
    userID,
    price,
    currency,
    stockCount,
    seller,
    imageURL,
  });
};
const findProductById = async ({ productID }: ControllerFindProductById) => {
  return await ProductServices.findProductById({
    productID,
  });
};
const findAllProducts = async () => {
  return await ProductServices.findAllProducts();
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
