import { CommentSchemaInterface } from "./comment.interfaces";
import { Types } from "mongoose";

export interface ProductSchemaInterface {
  description: string;
  title: string;
  price: number;
  currency: string;
  stockCount: number;
  seller: Types.ObjectId;
  orderedBy: string;
  imageURLs: string[];
  comments: CommentSchemaInterface;
}
