import {
  ControllerdeleteCommentProductById,
  ControlleraddCommentProductById,
  ControllerCreateCommentInput,
} from "./interfaces/comment.interfaces";
import CommentServices from "../services/comment";

const createComment = async ({
  userID,
  comment,
  rate,
}: ControllerCreateCommentInput) => {
  return await CommentServices.createComment({
    userID,
    comment,
    rate,
  });
};
const addComment = async ({
  userID,
  comment,
}: ControlleraddCommentProductById) => {
  return await CommentServices.addComment({
    userID,
    comment,
  });
};
const deleteComment = async ({
  userID,
  comment,
}: ControllerdeleteCommentProductById) => {
  return await CommentServices.deleteComment({
    userID,
    comment,
  });
};
export default { createComment, addComment, deleteComment };
