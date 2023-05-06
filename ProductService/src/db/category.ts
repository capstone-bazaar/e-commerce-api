import { CategorySchemaInterface } from "./interfaces/category.interfaces";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CategorySchema = new Schema<CategorySchemaInterface>(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

const CategoryModel = model<CategorySchemaInterface>(
  "Category",
  CategorySchema
);
export { CategoryModel };
