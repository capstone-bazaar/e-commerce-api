import mongoose from "mongoose";
const { Schema, model, connect } = mongoose;
interface ProductSchemaType {
  price: number;
  currency: string;
  stockCount: number;
  seller: string;
  orderedBy: string;
  imageUrl: string;
  comments: string;
}
const ProductSchema = new Schema<ProductSchemaType>(
  {
    price: Number,
    currency: String,
    stockCount: Number,
    seller: String,
    orderedBy: String,
    imageUrl: String,
    comments: String,
  },
  {
    timestamps: true,
  }
);

const ProductModel = model<ProductSchemaType>("Product", ProductSchema);

export default ProductModel;
