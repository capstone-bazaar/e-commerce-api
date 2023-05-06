import mongoose from "mongoose";
import { CategoryModel } from "../db/category";

const DB_URI =
  "mongodb://localhost:27017/ecommerce_test?retryWrites=true&w=majority";

const createDatabaseConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URI);
    console.log("✅ Product Service: Connected to DB");
  } catch (error) {
    console.log("⛔", error);
  }
};

const addNewCategories = async (categories: { title: string }[]) => {
  try {
    await createDatabaseConnection();

    const newCategories = await CategoryModel.insertMany(categories);
    console.log("✅ Product Service: Added new categories");
    return newCategories;
  } catch (error) {
    console.log("⛔", error);
  }
};

addNewCategories([
  { title: "Vegetables" },
  { title: "Instruments" },
  { title: "Textiles" },
  { title: "Furnitures" },
  { title: "Accessories" },
  { title: "Electronics" },
]);
