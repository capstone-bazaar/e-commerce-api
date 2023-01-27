import mongoose, { Types } from "mongoose";
const { Schema, model } = mongoose;

interface CommentSchemaType {
  userID: Types.ObjectId;
  comment: string;
  rate: number;
}

const CommentSchema = new Schema<CommentSchemaType>(
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

const CommentModel = model<CommentSchemaType>("Comment", CommentSchema);
export { CommentModel, CommentSchema };
