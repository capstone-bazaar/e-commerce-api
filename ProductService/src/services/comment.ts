import {
  ServiceCreateCommentInput,
  ServiceaddCommentByID,
  ServicedeleteCommentByID,
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
const addComment = async ({ userID, comment }: ServiceaddCommentByID) => {
  return await CommentDataAccess.addComment({
    userID,
    comment,
  });
};
const deleteComment = async ({ userID, comment }: ServicedeleteCommentByID) => {
  return await CommentDataAccess.deleteComment({
    userID,
    comment,
  });
};
export default { createComment, addComment, deleteComment };
