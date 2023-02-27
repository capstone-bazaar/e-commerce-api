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
const addCommentById = async ({
  userID,
  productID,
  comment,
}: ControllerAddCommentProductById) => {
  return await CommentServices.addCommentById({
    userID,
    productID,
    comment,
  });
};
const deleteCommentById = async ({
  comment,
}: ControllerDeleteCommentProductById) => {
  return await CommentServices.deleteCommentById({
    comment,
  });
};
export default {
  createComment,
  addCommentById,
  deleteCommentById,
};
