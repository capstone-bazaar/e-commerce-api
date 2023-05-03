import {
  DataAccessCreateCommentInput,
  DataAccessAddCommentByID,
  DataAccessDeleteCommentByID,
} from "./interfaces/comment.interfaces";
import mongoose from "mongoose";
import { CommentModel } from "../db/comment";
import { ProductModel } from "../db/product";

const createComment = ({
  userID,
  comment,
  rate,
}: DataAccessCreateCommentInput) => {
  const comments = new CommentModel({
    userID,
    comment,
    rate,
  });
  return comments.save();
};

const addComment = async ({
  userID,
  productID,
  comment,
  rate,
}: DataAccessAddCommentByID) => {
  return await ProductModel.updateOne(
    { _id: new mongoose.Types.ObjectId(productID) },
    {
      $push: {
        comments: {
          userID: new mongoose.Types.ObjectId(userID),
          comment,
          rate,
        },
      },
    }
  );
};
const deleteCommentById = async ({
  id,
  productID,
}: DataAccessDeleteCommentByID) => {
  return await ProductModel.updateOne(
    {
      _id: new mongoose.Types.ObjectId(productID),
    },
    {
      $pull: {
        comments: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    }
  );
};
export default { createComment, addComment, deleteCommentById };
