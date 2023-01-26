import mongoose from "mongoose";
const { Schema, model } = mongoose;
import UserModel from "../../../UserService/src/db/user";
interface ProductSchemaType {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy: string;
  imageUrl: string;
  comments: string;
}
interface CommentSchemaType {
  userID: string;
  comment: string;
  rate: number;
}
const ProductSchema = new Schema<ProductSchemaType>(
  {
    price: Number,
    currency: String,
    stockCount: Number,
    seller: [
      {
        type: Schema.Types.ObjectId,
        ref: UserModel,
      },
    ],
    orderedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: UserModel,
      },
    ],
    imageUrl: String,
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "CommentModel",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const CommentSchema = new Schema<CommentSchemaType>(
  {
    userID: [
      {
        type: Schema.Types.ObjectId,
        ref: UserModel,
      },
    ],
    comment: String,
    rate: Number,
  },
  {
    timestamps: true,
  }
);
export const ProductModel = model<ProductSchemaType>("Product", ProductSchema);
export const CommentModel = model<CommentSchemaType>("Comment", CommentSchema);
