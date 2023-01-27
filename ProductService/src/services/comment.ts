import CommentDataAccess from "../data-access/comment";

interface CommentType {
  userID: string;
  comment: string;
  rate: number;
}
const createComment = async ({ userID, comment, rate }: CommentType) => {
  return await CommentDataAccess.createComment({
    userID,
    comment,
    rate,
  });
};

export default { createComment };
