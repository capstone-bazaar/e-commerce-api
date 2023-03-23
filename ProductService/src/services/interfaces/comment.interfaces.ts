export interface ServiceCreateCommentInput {
  userID: string;
  comment: string;
  rate: number;
}
export interface ServiceAddCommentByID {
  userID: string;
  productID: string;
  comment: string;
}
export interface ServiceDeleteCommentByID {
  id: string;
  productID: string;
}
