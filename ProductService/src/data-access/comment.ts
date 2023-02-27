import {
  DataAccessCreateCommentInput,
  DataAccessAddCommentByID,
  DataAccessDeleteCommentByID,
} from "./interfaces/comment.interfaces";
import { CommentModel } from "../db/comment";

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

const addCommentById = async ({
  userID,
  productID,
  comment,
}: DataAccessAddCommentByID) => {
  return await CommentModel.updateOne({
    userID,
    productID,
    comment,
  });
};
const deleteCommentById = async ({ comment }: DataAccessDeleteCommentByID) => {
  return await CommentModel.deleteOne({
    comment,
  });
};
export default { createComment, addCommentById, deleteCommentById };
