import {
  DataAccessCreateProductInput,
  DataAccessAddProductById,
  DataAccessFindAllProducts,
  DataAccessFindProductById,
  DataAccessUpdateProductById,
  DataAccessDeleteProductById,
} from "./interfaces/product.interfaces";
import { ProductModel } from "../db/product";
import mongoose, { Types } from "mongoose";

const ObjectId = Types.ObjectId;

const calculateAvgRatingbyProductID = async ({ id }: { id: string }) => {
  const product = await ProductModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $addFields: {
        avgRate: { $avg: "$comments.rate" },
      },
    },
    {
      $project: {
        avgRate: 1,
      },
    },
  ]);

  return product[0].avgRate || Number(0);
};

const createProduct = ({
  price,
  stockCount,
  seller,
  imageURLs,
  description,
  title,
  category,
}: DataAccessCreateProductInput) => {
  const product = new ProductModel({
    price,
    description,
    title,
    currency: "$",
    stockCount,
    seller: new ObjectId(seller),
    imageURLs,
    category: new ObjectId(category),
  });
  return product.save();
};
const updateProductById = async ({
  productID,
  userID,
  price,
  category,
  title,
  description,
  stockCount,
}: DataAccessUpdateProductById) => {
  return await ProductModel.updateOne(
    {
      _id: new ObjectId(productID),
      seller: new ObjectId(userID),
    },
    {
      category,
      title,
      description,
      price,
      stockCount,
    }
  );
};

const findProductById = async ({ productID }: DataAccessFindProductById) => {
  return await ProductModel.findOne({
    _id: productID,
  });
};
const findAllProducts = async (fields: any) => {
  if (fields.filters) {
    if (fields.filters.byTitle && fields.filters.byTitle !== "") {
      return await ProductModel.find({
        title: { $regex: fields.filters.byTitle, $options: "i" },
      });
    }
    if (fields.filters.byCategory && fields.filters.byCategory !== "") {
      return await ProductModel.find({
        category: new ObjectId(fields.filters.byCategory),
      });
    }
  }

  if (fields.products && fields.products.length > 0) {
    return await ProductModel.find({ _id: { $in: fields.products } });
  }

  delete fields.filters;
  delete fields.products;

  return await ProductModel.find(fields);
};
const deleteProductById = async ({
  productID,
}: DataAccessDeleteProductById) => {
  return await ProductModel.deleteOne({
    _id: new mongoose.Types.ObjectId(productID),
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
