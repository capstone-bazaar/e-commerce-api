export interface ServiceCreateCommentInput {
  userID: string;
  comment: string;
  rate: number;
}
export interface ServiceaddCommentByID {
  userID: string;
  comment: string;
}
export interface ServicedeleteCommentByID {
  userID: string;
  comment: string;
}
