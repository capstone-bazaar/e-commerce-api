import ProductDataAccess from "../data-access/product";

interface ProductType {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy: string;
  imageUrl: string;
  comments: string;
}

const createProduct = async ({
  price,
  currency,
  stockCount,
  seller,
  orderedBy,
  imageUrl,
  comments,
}: ProductType) => {
  return await ProductDataAccess.createProduct({
    price,
    currency,
    stockCount,
    seller,
    orderedBy,
    imageUrl,
    comments,
  });
};

export default { createProduct };
