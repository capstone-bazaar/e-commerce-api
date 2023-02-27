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
const addCommentById = async ({
  userID,
  productID,
  comment,
}: ServiceAddCommentByID) => {
  return await CommentDataAccess.addCommentById({
    userID,
    productID,
    comment,
  });
};
const deleteCommentById = async ({ comment }: ServiceDeleteCommentByID) => {
  return await CommentDataAccess.deleteCommentById({
    comment,
  });
};
export default { createComment, addCommentById, deleteCommentById };
