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
  category,
}: ServiceCreateProductInput) => {
  return await ProductDataAccess.createProduct({
    price,
    stockCount,
    seller,
    imageURLs,
    description,
    title,
    category,
  });
};

const updateProductById = async ({
  userID,
  productID,
  category,
  title,
  description,
  price,
  stockCount,
}: ServiceUpdateProductById) => {
  return await ProductDataAccess.updateProductById({
    userID,
    productID,
    price,
    stockCount,
    category,
    title,
    description,
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
const calculateAvgRatingbyProductID = async ({ id }: { id: string }) => {
  return await ProductDataAccess.calculateAvgRatingbyProductID({ id });
};
export default {
  createProduct,
  updateProductById,
  findProductById,
  findAllProducts,
  deleteProductById,
  calculateAvgRatingbyProductID,
};
