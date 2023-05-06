import { CategoryModel } from "../db/category";

const findCategoryById = async ({ id }: { id: string }) => {
  return await CategoryModel.findById(id);
};

const getAllCategories = async () => {
  return await CategoryModel.find();
};

export default { findCategoryById, getAllCategories };
