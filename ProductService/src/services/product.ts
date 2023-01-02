import ProductDataAccess from "../data-access/product";
import CommentDataAccess from "../data-access/product";

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
const createComment= async ({
  userID,
  comment,
  rate,
}:CommentType)=>{
  return await CommentDataAccess.createComment({
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
  return await ProductDataAccess.createProduct({
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
