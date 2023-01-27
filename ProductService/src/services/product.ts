import ProductDataAccess from "../data-access/product";

interface ProductType {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy?: string;
  imageURL: string;
  comments: string;
}

const createProduct = async ({
  price,
  currency,
  stockCount,
  seller,
  imageURL,
  comments,
}: ProductType) => {
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
