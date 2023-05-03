import {
  ControllerDeleteCommentProductById,
  ControllerAddCommentProductById,
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
  productID,
  comment,
  rate,
}: ControllerAddCommentProductById) => {
  return await CommentServices.addComment({
    userID,
    productID,
    comment,
    rate,
  });
};
const deleteCommentById = async ({
  id,
  productID,
}: ControllerDeleteCommentProductById) => {
  return await CommentServices.deleteCommentById({
    id,
    productID,
  });
};
export default {
  createComment,
  addComment,
  deleteCommentById,
};
