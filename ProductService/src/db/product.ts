import mongoose, { Types } from "mongoose";
import { CommentSchema } from "./comment";
const { Schema, model } = mongoose;

interface ProductSchemaType {
  price: number;
  currency: string;
  stockCount: number;
  seller: Types.ObjectId;
  orderedBy: string;
  imageURL: string;
  comments: string;
}

const ProductSchema = new Schema<ProductSchemaType>(
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

export const ProductModel = model<ProductSchemaType>("Product", ProductSchema);
