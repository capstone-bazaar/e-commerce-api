
import ProductServices from "../services/product";
import CommentServices  from "../services/product";

interface ProductType {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy: string;
  imageUrl: string;
  comments: string;
}
interface CommentType{
  userID:string;
  comment:string;
  rate:number;
}
const createComment = async ({
  userID,
  comment,
  rate,
}:CommentType)=>{
  return await CommentServices.createComment({
    userID,
    comment,
    rate,
  });
};
const createProduct = async ({
  price,
  currency,
  stockCount,
  seller,
  orderedBy,
  imageUrl,
  comments,
}: ProductType) => {
  return await ProductServices.createProduct({
    price,
    currency,
    stockCount,
    seller,
    orderedBy,
    imageUrl,
    comments,
  });
};

export default { createProduct ,createComment};
