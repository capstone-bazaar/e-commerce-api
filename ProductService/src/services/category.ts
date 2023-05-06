import CategoryDataAccess from "../data-access/category";

const getAllCategories = async () => {
  return await CategoryDataAccess.getAllCategories();
};

export default {
  getAllCategories,
};
