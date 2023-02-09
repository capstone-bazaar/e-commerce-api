import { ServiceCreateProductInput } from "./interfaces/product.interfaces";
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

export default { createProduct };
