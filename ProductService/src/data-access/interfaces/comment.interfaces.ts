export interface DataAccessCreateCommentInput {
  userID: string;
  comment: string;
  rate: number;
}
export interface DataAccessAddCommentByID {
  userID: string;
  comment: string;
}
export interface DataAccessDeleteCommentByID {
  userID: string;
  comment: string;
}
