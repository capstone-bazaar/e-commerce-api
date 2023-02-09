import { ServiceCreateCommentInput } from "./interfaces/comment.interfaces";
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

export default { createComment };
