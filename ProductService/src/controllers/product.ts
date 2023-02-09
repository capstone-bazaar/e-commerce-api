import { ControllerCreateProductInput } from "./interfaces/product.interfaces";
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

export default { createProduct };
