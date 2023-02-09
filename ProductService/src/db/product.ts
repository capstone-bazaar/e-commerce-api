import { ProductSchemaInterface } from "./interfaces/product.interfaces";
import mongoose, { Types } from "mongoose";
import { CommentSchema } from "./comment";
const { Schema, model } = mongoose;

const ProductSchema = new Schema<ProductSchemaInterface>(
  {
    price: Number,
    currency: String,
    stockCount: Number,
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    imageURL: String,
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<ProductSchemaInterface>(
  "Product",
  ProductSchema
);
