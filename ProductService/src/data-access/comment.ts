import { CommentModel } from "../db/product";

interface CommentType {
  userID: string;
  comment: string;
  rate: number;
}
const createComment = ({ userID, comment, rate }: CommentType) => {
  const comments = new CommentModel({
    userID,
    comment,
    rate,
  });
  return comments.save();
};

export default { createComment };
