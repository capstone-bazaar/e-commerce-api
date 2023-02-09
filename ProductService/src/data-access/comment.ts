import { DataAccessCreateCommentInput } from "./interfaces/comment.interfaces";
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

export default { createComment };
