export interface ControllerCreateCommentInput {
  userID: string;
  comment: string;
  rate: number;
}
export interface ControllerAddCommentProductById {
  userID: string;
  productID: string;
  comment: string;
}
export interface ControllerDeleteCommentProductById {
  id: string;
  productID: string;
}
