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

const addComment = async ({ userID, comment }: DataAccessAddCommentByID) => {
  return await CommentModel.updateOne({
    userID,
    comment,
  });
};
const deleteComment = async ({
  userID,
  comment,
}: DataAccessDeleteCommentByID) => {
  return await CommentModel.deleteOne({
    userID,
  });
};
export default { createComment, addComment, deleteComment };
