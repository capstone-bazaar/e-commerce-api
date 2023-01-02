import {CommentModel, ProductModel} from "../db/product";

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
const createComment = ({
  userID,
  comment,
  rate,
}:CommentType)=>{
  const comments= new CommentModel({
    userID,
    comment,
    rate,
  });
  return comments.save();
}
const createProduct = ({
  price,
  currency,
  stockCount,
  seller,
  orderedBy,
  imageUrl,
  comments,
}: ProductType) => {
  const product = new ProductModel({
    price,
    currency,
    stockCount,
    seller,
    orderedBy,
    imageUrl,
    comments,
  });
  return product.save();
};

export default { createProduct , createComment};
