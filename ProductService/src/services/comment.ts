import {
  ServiceCreateCommentInput,
  ServiceAddCommentByID,
  ServiceDeleteCommentByID,
} from "./interfaces/comment.interfaces";
import CommentDataAccess from "../data-access/comment";

const createComment = async ({
  userID,
  comment,
  rate,
}: ServiceCreateCommentInput) => {
  return await CommentDataAccess.createComment({
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
}: ServiceAddCommentByID) => {
  return await CommentDataAccess.addComment({
    userID,
    productID,
    comment,
    rate,
  });
};
const deleteCommentById = async ({
  id,
  productID,
}: ServiceDeleteCommentByID) => {
  return await CommentDataAccess.deleteCommentById({
    id,
    productID,
  });
};
export default { createComment, addComment, deleteCommentById };
