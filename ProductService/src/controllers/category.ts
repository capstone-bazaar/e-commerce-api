import CategoryService from "../services/category";

const getAllCategories = async () => {
  return await CategoryService.getAllCategories();
};

export default {
  getAllCategories,
};
