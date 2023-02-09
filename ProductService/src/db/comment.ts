import { CommentSchemaInterface } from "./interfaces/comment.interfaces";
import mongoose, { Types } from "mongoose";
const { Schema, model } = mongoose;

const CommentSchema = new Schema<CommentSchemaInterface>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comment: String,
    rate: Number,
  },
  {
    timestamps: true,
  }
);

const CommentModel = model<CommentSchemaInterface>("Comment", CommentSchema);
export { CommentModel, CommentSchema };
