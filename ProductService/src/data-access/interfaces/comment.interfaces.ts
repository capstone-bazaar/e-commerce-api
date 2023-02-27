export interface DataAccessCreateCommentInput {
  userID: string;
  comment: string;
  rate: number;
}
export interface DataAccessAddCommentByID {
  userID: string;
  productID: string;
  comment: string;
}
export interface DataAccessDeleteCommentByID {
  comment: string;
}
