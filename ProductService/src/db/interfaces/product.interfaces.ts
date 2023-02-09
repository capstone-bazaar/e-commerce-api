import { CommentSchemaInterface } from "./comment.interfaces";
import { Types } from "mongoose";

export interface ProductSchemaInterface {
  price: number;
  currency: string;
  stockCount: number;
  seller: Types.ObjectId;
  orderedBy: string;
  imageURL: string;
  comments: CommentSchemaInterface;
}
