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
  category,
}: ControllerCreateProductInput) => {
  return await ProductServices.createProduct({
    price,
    seller,
    stockCount,
    description,
    title,
    category,
    imageURLs,
  });
};
const calculateAvgRatingbyProductID = async ({ id }: { id: string }) => {
  return await ProductServices.calculateAvgRatingbyProductID({ id });
};
const updateProductById = async ({
  productID,
  userID,
  category,
  title,
  description,
  price,
  stockCount,
}: ControllerUpdateProductById) => {
  return await ProductServices.updateProductById({
    productID,
    userID,
    price,
    stockCount,
    category,
    title,
    description,
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
  calculateAvgRatingbyProductID,
};
