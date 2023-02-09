import { Types } from "mongoose";

export interface CommentSchemaInterface {
  userID: Types.ObjectId;
  comment: string;
  rate: number;
}
