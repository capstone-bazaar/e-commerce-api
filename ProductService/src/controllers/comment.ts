import CommentServices from "../services/comment";

interface CommentType {
  userID: string;
  comment: string;
  rate: number;
}
const createComment = async ({ userID, comment, rate }: CommentType) => {
  return await CommentServices.createComment({
    userID,
    comment,
    rate,
  });
};

export default { createComment };
