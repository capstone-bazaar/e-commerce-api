import { ControllerCreateCommentInput } from "./interfaces/comment.interfaces";
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

export default { createComment };
